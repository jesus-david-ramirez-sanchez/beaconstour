import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finctions',
  templateUrl: './finctions.component.html',
  styleUrls: ['./finctions.component.scss']
})
export class FinctionsComponent implements OnInit {
  ngOnInit(): void {
    const masonryLayout = (containerElem, itemsElems, columns) => {
      containerElem.classList.add('masonry-layout', `columns-${columns}`);
      const columnsElements = [];

      for (let i = 1; i <= columns; i++) {
        const column = document.createElement('div');
        column.classList.add('masonry-column', `column-${i}`);
        containerElem.appendChild(column);
        columnsElements.push(column);
      }

      for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
          const item = itemsElems[m * columns + n];
          columnsElements[n].appendChild(item);
          item.classList.add('masonry-item');
        }
      }
    };

    masonryLayout(
      document.getElementById('gallery'),
      document.querySelectorAll('.gallery-item'),
      4
    );

  }

}
