const fs = require("fs");
const path = require("path");

const progressbar = async (file, folder) => {
  let file_path = file;
const folderPath = folder; // Укажите путь к вашей папке с файлами

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      return stats.size; // Размер файла в байтах
    } else {
      return -1; // Если это не файл
    }
  } catch (err) {
    return -1; // Если произошла ошибка
  }
}

function getTotalFolderSize(folderPath) {
  let totalSize = 0;

  // Синхронно получаем список файлов в папке
  const files = fs.readdirSync(folderPath);

  // Итерируемся по списку файлов и суммируем их размеры
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      totalSize += stats.size;
    }
  }

  return totalSize;
}

// Подсасываем размер файла и папки
try {
  const totalSize = getTotalFolderSize(folderPath);
  console.log("Total size of files in the folder:", totalSize, "bytes");
} catch (err) {
  console.error("An error occurred:", err);
}

try {
  const file_size = getFileSize(file_path);
  console.log("File size is :", file_size, "bytes");
} catch (err) {
  console.error("An error occurred:", err);
}

// Получаем размер файла относительно всей папки
function getPercent(file, folder)
{
  const percentage = (file / folder) * 100;
  return  percentage;
}
const filesize = getFileSize(file_path);
const foldersize = getTotalFolderSize("./");

function printLoadingBar(iteration, total, length) {
  const progress = (iteration / total);
  const barLength = Math.round(length * progress);
  const bar = '='.repeat(barLength) + ' '.repeat(length - barLength);
  const percent = Math.round(progress * 100);
  process.stdout.clearLine();  // Очищаем предыдущий вывод
  process.stdout.cursorTo(0);  // Перемещаем курсор в начало строки
  process.stdout.write(`[${bar}] ${percent}%`);
}

// Пример использования
const totalIterations = 100;
const filePercent = Math.floor(getPercent(filesize, foldersize));
for (let i = 0; i <= filePercent; i++) {
  setTimeout(() => {
    // Имитация работы
    printLoadingBar(i, totalIterations, 50);
    if (i === totalIterations) {
      console.log();  // Переводим строку после завершения
    }
  }, 100 * i);  // Задержка для имитации работы
}
}

progressbar("./file1.txt","./");

