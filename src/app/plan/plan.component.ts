import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

import { Subject } from 'rxjs';

import { EventColor } from 'calendar-utils'
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { AuthService } from '../Services/auth.service';
// CalendarEvent,
const colors: Record<string, EventColor> = {
  red: {
    primary: '#FFFFFF',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};


@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrl: './plan.component.css',
    standalone :false ,
})
export class PlanComponent {
  showModal = false;
  selectedColor = 'blue'
  showAddEventForm = false;  // Ajout de cette propriété

 events: CalendarEvent[] = [
  {
    start: new Date(new Date().getFullYear(), 1 , 6),
    title: 'seance potrine',
    color: { ...colors['yellow'] },
   
  },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'senace epaule',
      color: { ...colors['yellow'] },
     
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'Seance dorseaux ',
      color: { ...colors['blue'] },
     
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'seance leges',
      color: { ...colors['blue'] },

      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'seance abdo ',
      color: { ...colors['yellow'] },      
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];




  CalendarView = CalendarView;

 

  viewDate: Date = new Date();
 
  view: CalendarView = CalendarView.Month;
  //CalendarView!: any;
 
  activeDayIsOpen: boolean = false;


  modalData: { event: CalendarEvent<any>; action: string; } | undefined;
  modal: any;
  modalContent: any;

  refresh = new Subject<void>()











  constructor() {
    
    // const event1 = {
    //   title: "Seance dorseaux ",
    //   start: new Date("2024-12-09T10:30"),
    //   end: new Date("2024-01-09T10:30"),
    //   "color": {
    //     "primary": "#1e90ff",
    //     "secondary": "#D1E8FF"
    //   },
    //   draggable: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   }
    // }
    // this.events.push(event1);
  }



  // saveEvent(): void {
  //   this.events = [...this.events, {...this.newEvent}];
  //   this.refresh.next();
  //   this.modal.dismissAll();
  // }


  setView(view: CalendarView) {
    console.log("Before update - Current view:", this.view);
    console.log("Setting view to:", view);
    this.view = view;
    console.log("After update - Current view:", this.view);
  }
  

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
 
  eventTimesChanged(event: any) {
    event.event.start = event.newStart;
    event.event.end = event.newEnd;
    this.refresh.next();
  }
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }



  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }



  previous() {
    this.viewDate = subDays(this.viewDate, 1); // Exemple de décalage d'un jour
  }

  today() {
    this.viewDate = new Date(); 
  }

  next() {
    this.viewDate = addDays(this.viewDate, 1); 
  }

  

  eventClicked(event: any) {
    console.log('Event clicked:', event);
  }



  newEvent: CalendarEvent = {
    title: '',
    start: new Date(),
    end: new Date(),
    color: colors['blue'],
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
  };


  saveEvent(): void {
    if (this.newEvent.title && this.newEvent.start && this.newEvent.end) {
      this.newEvent.color = colors[this.selectedColor as keyof typeof colors];
      this.events = [...this.events, { ...this.newEvent }];
      this.refresh.next();
      this.showModal = false;
      this.showAddEventForm = false;
    } else {
      alert('Veuillez remplir tous les champs obligatoires');
    }
  }

  cancelEvent(): void {
    this.showAddEventForm = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  // saveEvent(): void {
  //   if (this.newEvent.title && this.newEvent.start && this.newEvent.end) {
  //     this.events = [...this.events, { ...this.newEvent }];
  //     this.refresh.next();
  //     this.showAddEventForm = false; // Hide the form after saving
  //   } else {
  //     alert('Please fill in all event details.');
  //   }
  // }

  // newEvent: CalendarEvent = {
  //   title: '',
  //   start: new Date(),
  //   end: new Date(),
  //   color: colors['blue'],
  //   draggable: true,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true,
  //   },
  // };
}


