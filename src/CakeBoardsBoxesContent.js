import React from 'react';

// Boards and Boxes will be preset picture options
// Right now they will just be buttons

function CakeBoardsBoxesContent() {
  const boards = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];

  const boxes = [{ title: 'Option' }, { title: 'Option' }, { title: 'Option' }];

  return (
    <div>
      <div>
        Boards
        <ul>
          {boards.map((board, index) => (
            <li key={index}>
              <button>{board.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Boxes
        <ul>
          {boxes.map((box, index) => (
            <li key={index}>
              <button>{box.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CakeBoardsBoxesContent;
