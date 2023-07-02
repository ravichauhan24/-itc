import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css']
})
export class LeftImageTextComponent implements OnInit {
  public homedata: string = 'Is the oldest institution of Charotar area of Gujarat. The registered society was formed by dynamic dedicated educationist and great visionary late Shri Motibhai Amin.He was the pioneer in bringing library movement in Gujarat. Gandhiji aptly called him “ Charotar nu moti” means pearl of Charotar area ( Charotar is the geographical territory between the rivers the Mahi and the Vatrak ) The institution has earned name and fame in the field of education. During Dandi March Gandhiji stayed for two days 16 – 17 March 1930 in the campus and blessed the pioneer founders. The constitution of the society was written by Shri Vithalbhai Z.Patel who was elder brother of Sardar Vallabhai Patel. Shri V.Z. Patel was chairman from 1921 to 1933 and Shri Ganesh Vasudev Mavlankar was chairman from 1940 to 1954. Darbar Gopaldas, Shri Ambalal Patel, noted social worker Thakkarbapa, Shri Shankarbhai Patel , noted educationist Shri Ishwarbhai J.Patel and Shri Vitthalbhai J.Patel have contributed and blessed this society. As a result of the dedicated efforts of these great leaders, we have established a tradition of creating new courses responding to the needs of the community and in keeping with our national aspirations.'
  public aboutdata: string = 'The motto of the society is ‘Uttishthit Jagrat Prapt Varanni Bodhat ( Utho Jago, Dhyeya, Gyan, Bodh  Prapti tak  Lage Raho – Arise, Awake and Strive till the goal is achieved ). Since last 102 years the society is carefully nurtured by illustrious academician as administrators has caused a place of pride for itself on the academic map of Gujarat. There are three vast campus of education managed by this society. One is in the heart of Anand, Second campus is in the suburb of Anand near Agriculture University, the third campus is in Mogari village and from nursery to P.G. different courses are taught to the students. The college , the parent institution and executive council together contribute significantly for a noble cause for qualitative improvement of education and strive to equib the students to face the challenges of 21st century. In the year 2008 NCTE granted permission for M.Ed course. It was fully established from 4/11/2018 and only self financed M.Ed college of Sardar Patel University . There is intake of 35+3(EWS)=38 Students.';
  public trustdata: string = 'The institution has well furnished, spacious and excellent physical infrastructure as per NCTE norms, in terms of classrooms, library , laboratories , playground and sport facilities. The institution has 100 units of student teachers. The classrooms for each method are fully equipped with all facilities and are spacious and ventilated. The multipurpose hall is fully developed with latest gadgets where all the functions are systematically arranged without any hindrance. The institution has fully furnished science, psychology, computer and educational technology (ET) laboratories. A huge playground is there for various sports and games.The institution has adequate facilities to ensure health and hygiene of the staff and the students. A separate well furnished ladies room on the ground floor and a separate boys toilets with urinals and all the floors have sanitary facilities. There are 14 urinals and 2 toilets for male and 10 toilets for female on the first floor. Apart from ladies room for drinking water R.O system plant is installed.The staff and student of the institution can avail medical facility from Sardar Patel University Health Centre and also from Mogari primary health center. (PHC). The management society has made available laboratory facilities for students and staff in Anand as well as a Psychiatirst and councellor for guidance and counseling to students having tension and stress.';
  public textdata: string = '';
  public abouttitle: string = 'History';
  public trusttitle: string = 'FACILITIES:';
  public title: string = '';
  public subtitle: string = '';
  public hometitle: string= 'Charotar Education Society established on April 1916';
  public asubtitle: string = 'Shri D N Institute of P G Studies in commerce';
  public tsubtitle: string = '';
  dimg: string = 'assets/images/ijpatel.jpg';
  himg: string = 'assets/images/infrastructure/1.jpg';
  timg: string = 'assets/images/infrastructure/2.jpg';
  daimg: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.router.url == "/basic/about") {
      this.textdata = this.aboutdata;
      this.daimg = this.dimg;
      this.title = this.abouttitle;
    }
    else if (this.router.url == "/basic/trust") {
      this.textdata = this.trustdata;
      this.daimg = this.timg;
      this.title = this.trusttitle;
    }
    else {
      this.title = this.abouttitle;
      this.subtitle = this.hometitle;
      this.textdata = this.homedata;
      this.daimg = this.himg;

    }
  }



}
