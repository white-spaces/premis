import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', './front-page-responsive.css']
})
export class FrontPageComponent implements OnInit {

  constructor() {}

  // Mobile Nav Trigger

  showMobileNav: boolean = false;

  toggleMobileNav(){
    // Check if Nav is toggled
    if (this.showMobileNav === false) {
      this.showMobileNav = true;
    } else {
      this.showMobileNav = false;
    }
  }

  disableMobileNav(){
    this.showMobileNav = false;
  }

  ngOnInit() {
    // Scroll stílar fyrir myndband of Navbar
    $(document).ready(function() {
      $(window).on('load scroll', function() {
        var scrolled = $(this).scrollTop();
        $('nav').css({
          
          // Parallax scroll á 20% hraða
          'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px,0)',
          
          // Hverfur á 400px frá toppi
          'opacity': 1 - scrolled/75 
        });

        // Prallax Scroll á 25% hraða
        $('#myndskeid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)')

        // Bookmark transistion á scrolli

        $('#bookmark').css('transform', 'translate3d(' + -(scrolled * 0.10) +'px, 0, 0)')

      });
    });
  };

  arrowFunction(){
    // Ör sem scrollar að efni
    $(".down-arrow-container").click(function(){
      $("html, body").animate({
        scrollTop: $(".frettir").offset().top
      }, 600);
    })
  }
}
