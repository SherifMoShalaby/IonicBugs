import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { List } from './../List';
import { ListTypeEnum } from './../ListTypeEnum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  lists: List[] = [];
  pinnedListType = ListTypeEnum.PIN;
  regularListType = ListTypeEnum.REGULAR;

  ionSelectBindList: string[] = [];
  ionSelectChoosenList: string[] = [];

  ngOnInit() {
    const list1 = new List();
    list1.id = 1;
    list1.name = 'list1';
    this.lists.push(list1);

    const list2 = new List();
    list2.id = 2;
    list2.name = 'list2';
    this.lists.push(list2);

    const list3 = new List();
    list3.id = 3;
    list3.name = 'list3';
    this.lists.push(list3);


    this.ionSelectBindList.push('1');
    this.ionSelectBindList.push('2');
    this.ionSelectBindList.push('3');
    this.ionSelectBindList.push('4');
  }

  onClick(list: List) {
    console.log('onClick: ' + list);
  }

  onAdd(list: List, itemSliding: IonItemSliding) {
    itemSliding.close();
    this.lists.unshift(list);
    console.log('onAdd: ' + list);
  }

  /**
  *
  */
  selectionChanged(eventValue) {
    this.ionSelectChoosenList = [];
    this.ionSelectChoosenList.push(eventValue);
    console.log(eventValue);
  }
}
