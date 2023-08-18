import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {

  myCourseCard = {
    course: {
      dateTime: "2019-07-20 07:16:00.302Z",
      lastReadContentStatus: 2,
      enrolledDate: "2019-07-12 06:13:18:811+0000",
      addedBy: null,
      delta: null,
      contentId: "do_21278859656586035211271",
      batch: {
        identifier: "01278861095539507215",
        endDate: "2019-11-08",
        createdBy: "ab467e6e-1f32-453c-b1d8-c6b5fa6c7b9e",
        name: "This is Open Batch",
        enrollmentType: "open",
        startDate: "2019-06-21",
        status: 2
      },
      active: true,
      description: "This is a sample course which contains all content types",
      courseLogoUrl: "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg",
      batchId: "01278861095539507215",
      userId: "d156e1be-9d11-45e3-b6a2-6aa8b88a79bb",
      content: {
        identifier: "do_21278859656586035211271",
        orgDetails: {
          orgName: "Odisha",
          email: "qa_ekstep@qualitrix.com"
        },
        channel: "0124784842112040965",
        name: "vk-allcontentcourse",
        topic: [
          "Teaching and Classroom Management"
        ],
        contentType: "Course",
        objectType: "Content"
      },
      contentStatus: "{\"do_21278859467422924811267\":2,\"do_212686701951557632146\":2,\"do_212731858982608896136\":1,\"do_21266818477830144012700\":2,\"do_2127319848127283201364\":2}",
      completionPercentage: 50,
      courseName: "vk-allcontentcourse",
      completedOn: null,
      leafNodesCount: 8,
      grade: null,
      progress: 4,
      lastReadContentId: "do_21266818477830144012700",
      courseId: "do_21278859656586035211271",
      status: 1
    },
    isMobile: false,
    isOffline: false,
    isMenu:false,
    isLoading:true,
    section: "section",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}