import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @ViewChild('toggleOne') toggleOne: ElementRef | undefined;
  @ViewChild('toggleOneTarget') toggleOneTarget: ElementRef | undefined;
      @ViewChild('toggleTwo') toggleTwo: ElementRef | undefined;
  @ViewChild('toggleTwoTarget') toggleTwoTarget: ElementRef | undefined;
        @ViewChild('toggleThree') toggleThree: ElementRef | undefined;
  @ViewChild('toggleThreeTarget') toggleThreeTarget: ElementRef | undefined;

  showNav = [false,false];
  clickNav(number: number) {
    console.log(number);
  this.showNav[number] = !this.showNav[number]; 
}

  constructor(private renderer: Renderer2) { 

    this.renderer.listen('window', 'click',(e:Event)=>{
        if(e.target !== this.toggleOne!.nativeElement && e.target!==this.toggleOneTarget!.nativeElement){
            this.showNav[0] = false;
        }
              if(e.target !== this.toggleTwo!.nativeElement && e.target!==this.toggleTwoTarget!.nativeElement){
            this.showNav[1] = false;
              }
                    if(e.target !== this.toggleThree!.nativeElement && e.target!==this.toggleThreeTarget!.nativeElement){
            this.showNav[2] = false;
        }
    });
  }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  ngOnInit(): void {
  }

}
