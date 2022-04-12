import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listaTarjetas:any[] = [
    {titular: 'Juan Perez', numeroTarjeta: '1234567890123456', fechaExpiracion: '12/20', cvv: '123'},
    {titular: 'Isabel Martinez', numeroTarjeta: '1231231231231231', fechaExpiracion: '11/20', cvv: '312'}
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      cvv: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listaTarjetas.push(tarjeta);
    this.form.reset();
  }
}
