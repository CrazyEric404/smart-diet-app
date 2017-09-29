import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(ScanPage);
  }goToManuallyAddFood(params){
    if (!params) params = {};
    this.navCtrl.push(ManuallyAddFoodPage);
  }goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
}
