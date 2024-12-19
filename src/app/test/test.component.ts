import { Component, OnInit } from '@angular/core';
import { SanteService } from '../Services/sante.service';
import { Router } from '@angular/router';
import { ImageSante } from '../Model/imageSante.model';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-test',
  standalone: false,
  
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  // Données statiques pour les statistiques
  statistiquesSante = {
    pasQuotidiens: 8547,
    caloriesBrulees: 2450,
    minutesExercice: 45,
    frequenceCardiaque: 75
  };

  // Données pour le graphique linéaire
  lineChartData: ChartData<'line'> = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
      {
        data: [6500, 7200, 8000, 7500, 9000, 8547, 8200],
        label: 'Pas quotidiens',
        tension: 0.5,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true
      }
    ]
  };

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Données pour le graphique circulaire
  pieChartData: ChartData<'pie'> = {
    labels: ['Activité', 'Repos'],
    datasets: [{
      data: [45, 55],
      backgroundColor: ['#4CAF50', '#FFA726']
    }]
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  constructor() {}

  ngOnInit(): void {}
}