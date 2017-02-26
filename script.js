/* global d3 */

const board = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

d3.select('div.board')
  .selectAll('div.square')
  .data(board)
  .enter()
  .append('div')
  .attr('class', 'square')
