/**
 * Seeder file for seeding the database
 */

"use strict";

const fs = require('fs');
const { execSync } = require("child_process");
const colors = require('colors');


/**
 * Helper function for async await with try catch block
 */
const asyncHandler = (cb) => {
  return async (req,res,next) => {
    try {
      await cb(req,res,next);
    } catch(err) {
      console.log(`Seeder encountered an error: ${err}`.red);
      throw err;
    }
  }
}


/**
 * Undo migrations
 */
// asyncHandler(async () => {
//   console.log('Undoing migrations'.cyan);
  
//   execSync("npx sequelize-cli db:migrate:undo:all", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`.red);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`.red);
//         return;
//     }
//     console.log(`stdout: ${stdout}`.red);
//   });
// })();


/**
 * Undo seeds
 */
// asyncHandler(async () => {
//   console.log('Undoing seeds'.cyan);
  
//   execSync("npx sequelize-cli db:seed:undo:all", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`.red);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`.red);
//         return;
//     }
//     console.log(`stdout: ${stdout}`.red);
//   });
// })();


/**
 * Check if database file exists and if so, remove it
 */
asyncHandler(async () => {
  const dbPath = './truth.db';

  if (fs.existsSync(dbPath)) {
    console.log('Removing current database file'.red);
    fs.unlinkSync(dbPath);
  }
})();


/**
 * Run migrations
 */
asyncHandler(async () => {
  console.log('Running migrations to create new database file and tables'.cyan);
  
  execSync("npx sequelize-cli db:migrate", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`.red);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`.red);
        return;
    }
    console.log(`stdout: ${stdout}`.red);
  });
})();


// Seeding tables
asyncHandler(async () => {
  console.log('Seeding tables'.cyan);

  execSync("npx sequelize-cli db:seed:all", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`.red);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`.red);
        return;
    }
    console.log(`stdout: ${stdout}`.red);
  });
})();
