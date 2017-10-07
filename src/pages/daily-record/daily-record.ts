import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { TodayPage } from '../today/today';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ScanPage } from '../scan/scan';
import { FoodConfirmPage } from '../food-confirm/food-confirm';

@Component({
  selector: 'page-daily-record',
  templateUrl: 'daily-record.html'
})
export class DailyRecordPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToManuallyAddFood(params){
    if (!params) params = {};
    this.navCtrl.push(ManuallyAddFoodPage);
  }goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(ScanPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }
}
