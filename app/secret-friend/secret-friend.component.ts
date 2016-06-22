import { Component, OnInit } from 'angular2/core';

@Component({
    templateUrl: './app/secret-friend/secret-friend.component.html'
})
export class SecretFriendComponent {
    pageTitle: string = 'Secret Friend';
    
    participants: string[] = [ "Participant 01", "Participant 02", "Participant 03", "Participant 04", "Participant 05", "Participant 06", "Participant 07", "Participant 08", "Participant 09", "Participant 10", ];
    
    raffle(): string {
        
        let retVal: string = "";
        
        for (var index = 0; index < this.participants.length; index++) {
            var element = this.participants[index];
            
        }
        
        return retVal;
    }
}

class Node {
    value: string;
    next: Node;
}