import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import * as XLSX from 'xlsx';
import { Table, TableColumn, TableHeader, TableRow } from 'ugla';

@Component({
  selector: 'app-import-xlsx',
  templateUrl: './import-xlsx.component.html',
  styleUrls: ['./import-xlsx.component.scss']
})
export class ImportXlsxComponent implements OnInit {

  data: Object[];
  public table: Table;

  ngOnInit(): void {
  }

  buildHeader(data: any) {
    return [
      new TableHeader(data[0].toString(), data[0].toString().length, 'left'),
      new TableHeader(data[1].toString(), data[1].toString().length, 'left'),
      new TableHeader(data[2].toString(), data[2].toString().length, 'left'),
      new TableHeader(data[3].toString(), data[3].toString().length, 'left'),
      new TableHeader(data[4].toString(), data[4].toString().length, 'left'),
      new TableHeader(data[5].toString(), data[5].toString().length, 'left'),
      new TableHeader(data[6].toString(), data[6].toString().length, 'left'),
      new TableHeader(data[7].toString(), data[7].toString().length, 'left'),
      new TableHeader(data[8].toString(), data[8].toString().length, 'left'),
      new TableHeader(data[9].toString(), data[9].toString().length, 'left'),
      new TableHeader(data[10].toString(), data[10].toString().length, 'left')
    ];
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <Object[]>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      //console.log(this.data);
      this.buildRows(this.data)
    };
    reader.readAsBinaryString(target.files[0]);
  }

  buildRows(data: Object[]) {
    let count = 0;
    data.forEach(item => {
      if (count == 0) {
        this.table = new Table('absence-table', true, this.buildHeader(item), []);
      } else {
        this.table.data.push(new TableRow([
          new TableColumn(item[0], {}),
          new TableColumn(item[1], {}),
          new TableColumn(item[2], {}),
          new TableColumn(item[3], {}),
          new TableColumn(item[4], {}),
          new TableColumn(item[5], {}),
          new TableColumn(item[6], {}),
          new TableColumn(item[7], {}),
          new TableColumn(item[8], {}),
          new TableColumn(item[9], {}),
          new TableColumn(item[10], {})
        ]));
      }
      count = count + 1;
    });
  }
}
