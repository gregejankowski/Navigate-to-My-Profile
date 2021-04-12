// navToMyProfile.js 

import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Id from '@salesforce/user/Id';

export default class NavToMyProfile extends LightningElement {
    //Get the current user Id
    userId = Id;

    // Navigation to web page 
    navigateToMyProfile() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "/profile/{userId}"
            }
        });
    }
}