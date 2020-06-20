import * as _ from 'lodash';
import Matrix from './matrix/Matrix';

const matrix = new Matrix(10, 10);
document.body.querySelector('main').appendChild(matrix.getMatrixWrapper());