import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import { HomeAdminService } from 'src/app/services/home-admin.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home-ad',
  templateUrl: './home-ad.component.html',
  styleUrls: ['./home-ad.component.css'],
  providers: [DatePipe]
})
export class HomeAdComponent implements OnInit {

  @ViewChild('pieCanvas') private pieCanvas: ElementRef;
  pieChart: any;

  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  lineChart: any;

  private pieChartLabels = ["Số ứng viên thành công", "Số ứng viên thất bại"];
  private pieChartData = [];

  private lineChartLabels = [];
  private lineChartDataLine1 = [];
  private lineChartDataLine2 = [];

  dateRangeForm!: FormGroup;
  startDate: any;

  ngOnInit(): void {
    this.initForm();
    const date = new Date();
    this.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.dateRangeForm.patchValue({
      fromDate: new Date(date.getFullYear(), date.getMonth(), 1),
      toDate: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    });
  }


  constructor(private Fb: FormBuilder,
    private datePipe: DatePipe,
    private homeAdminService: HomeAdminService) {
  }

  // get f(){

  // }
  public initForm() {
    this.dateRangeForm = this.Fb.group({
      fromDate: new FormControl(this.datePipe.transform(new Date(), 'MM/dd/yyyy')),
      toDate: new FormControl(this.datePipe.transform(new Date(), 'MM/dd/yyyy'))
    });
  }

  get f() {
    return this.dateRangeForm.controls;
  }
  ngAfterViewInit(): void {
    // const date = new Date();
    // this.dateRangeForm.patchValue({
    //   fromDate: new Date(date.getFullYear(), date.getMonth(), 1),
    //   toDate: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    // });
    this.changeDateEvent(null);
  }

  changeDateEvent(event: any) {
    // check toDate phải lớn hơn fromDate
    console.log(event.target.value);
    // TODO - get fromDate, toDate ==> call api ==> re-render chart  

    // this.homeAdminService.getStatisticNumbers(this.dateRangeForm.get("fromDate")?.value, this.dateRangeForm.get("toDate")?.value).subscribe(res => {
      // lấy được data từ backend
    // });

    this.homeAdminService.getLineChartData(this.dateRangeForm.get("fromDate")?.value, this.dateRangeForm.get("toDate")?.value, "d").subscribe(res => {
      this.lineChartLabels = res.label.split(",");
      this.lineChartDataLine1 = res.qtyPerson.split(",");
      this.lineChartDataLine2 = res.successRecruitment.split(",");
      this.lineChartMethod(this.lineChartLabels, this.lineChartDataLine1, this.lineChartDataLine2);
    });

    this.homeAdminService.getPieChartData(this.dateRangeForm.get("fromDate")?.value, this.dateRangeForm.get("toDate")?.value).subscribe(res => {
      this.pieChartData.push(res.sucessApplicantQuantity);
      this.pieChartData.push(res.failApplicantQuantity);
      this.pieChartBrowser(this.pieChartLabels, this.pieChartData);
    });

  }

  pieChartBrowser(labels: [], data: []): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c'
          ],
          data: data
        }]
      }
    });
  }

  lineChartMethod(labels: Array<string>, data1: Array<number>, data2: Array<number>) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, { 
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: labels,
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          },
          {
            label: labels,
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            spanGaps: false,
          }
        ]
      }
    });
  }

}
