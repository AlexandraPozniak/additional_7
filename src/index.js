module.exports = function solveSudoku(matrix) {
  let repeatCheck = Array([9]);

     const checkout = () => {
         for (let i = 1; i <= 9; i++) repeatCheck[i] = false;

     };

     const rowVal = (row) => {
         checkout();
         for (let column = 0; column < 9; column++) {
             if (matrix[row][column] != 0) {
                 if (repeatCheck[matrix[row][column]])
                     return false;
                 repeatCheck[matrix[row][column]] = true;
             }
         }
         return true;
     }

     const colVal = (column) => {
         checkout();
         for (let row = 0; row < 9; row++) {
             if (matrix[row][column] != 0) {
                 if (repeatCheck[matrix[row][column]])
                     return false;
                 repeatCheck[matrix[row][column]] = true;
             }
         }
         return true;
     }

     const validBlock = (frRow, frCol) =>
     {
         checkout();
         for (let row = frRow; row < frRow+3; row++) {
             for (let column = frCol; column < frCol+3; column++) {
                 if (matrix[row][column] != 0) {
                     if (repeatCheck[matrix[row][column]])
                         return false;
                     repeatCheck[matrix[row][column]] = true;
                 }
             }
         }
         return true;
     }

     const advSolv =(row, column) =>
     {
         while (row < 9 && matrix[row][column] != 0) {
             column++;
             if (column == 9) {
                 row++;
                 column = 0;
             }
         }
         if (row == 9) return true;

         for (let k = 1; k <= 9; k++) {
             matrix[row][column] = k;
             if (rowVal(row) && colVal(column)
                 && validBlock(row - row%3, column - column%3)
                 && advSolv(row, column))
                 return true;
         }

         matrix[row][column] = 0;
         return false;
     }

     advSolv(0, 0);
 return matrix;

};
