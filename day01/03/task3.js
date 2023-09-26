const fsp = require('fs').promises;
const fs = require('fs');



function readAndWriteCallbackHell(callback) {
    fs.readFile('file1.txt', 'utf8', (err, data) => {
      if (err) {
        return callback(err);
      }
  
      fs.writeFile('file2.txt', data, 'utf8', (err) => {
        if (err) {
          return callback(err);
        }
        
        callback(null, 'Data has been successfully read from file1.txt and written to file2.txt.');
      });
    });
  }

  function readAndWritePromises() {
    return fsp.readFile('file1.txt', 'utf8')
      .then((data) => {
        return fsp.writeFile('file2.txt', data, 'utf8');
      })
      .then(() => {
        console.log('Данные успешно скопированы из file1.txt в file2.txt с помощью Промиса');
      })
      .catch((err) => {
        console.error('Произошла ошибка:', err);
      });
  }

  async function readAndWriteAsyncAwait() {
    try {
      const data = await fsp.readFile('file1.txt', 'utf8');
      await fsp.writeFile('file2.txt', data, 'utf8');
      console.log('Данные успешно скопированы из file1.txt в file2.txt с асинхронностью');
    } catch (err) {
      console.error('Произошла ошибка:', err);
    }
  }
  

// Проверка вывода
readAndWriteCallbackHell((err, result) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log(result);
    }
  });
  readAndWritePromises();
  readAndWriteAsyncAwait();