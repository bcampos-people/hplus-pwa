import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';

import {HotelService} from "../services/hotel-service";
import {PlaceService} from "../services/place-service";
import {ActivityService} from "../services/activity-service";
import {CarService} from "../services/car-service";
import {TripService} from "../services/trip-service";

import {MyApp} from "./app.component";

import {AccountPage} from "../pages/account/account";
import {CarDetailPage} from "../pages/car-detail/car-detail";
import {CarsPage} from "../pages/cars/cars";
import {CheckoutCarPage} from "../pages/checkout-car/checkout-car";
import {CheckoutHotelPage} from "../pages/checkout-hotel/checkout-hotel";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {HotelPage} from "../pages/hotel/hotel";
import {HotelDetailPage} from "../pages/hotel-detail/hotel-detail";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {ReviewsPage} from "../pages/reviews/reviews";
import {SearchCarsPage} from "../pages/search-cars/search-cars";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {SearchTripsPage} from "../pages/search-trips/search-trips";
import {TabReviewsPage} from "../pages/tab-reviews/tab-reviews";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    CarDetailPage,
    CarsPage,
    CheckoutCarPage,
    CheckoutHotelPage,
    CheckoutTripPage,
    HomePage,
    HotelPage,
    HotelDetailPage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ReviewsPage,
    SearchCarsPage,
    SearchLocationPage,
    SearchTripsPage,
    TabReviewsPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'md',
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    CarDetailPage,
    CarsPage,
    CheckoutCarPage,
    CheckoutHotelPage,
    CheckoutTripPage,
    HomePage,
    HotelPage,
    HotelDetailPage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ReviewsPage,
    SearchCarsPage,
    SearchLocationPage,
    SearchTripsPage,
    TabReviewsPage,
    TripDetailPage,
    TripsPage
  ],
  providers: [
    HotelService,
    PlaceService,
    ActivityService,
    CarService,
    TripService,
    CarService,
    TripService
  ]
})

export class AppModule {
}
