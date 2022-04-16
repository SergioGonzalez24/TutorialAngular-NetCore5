import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder,
    private toastr: ToastrService ) { 
    // Formulario para tarjeta
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      cvv: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  // Metodo para agregar una tarjeta
  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listaTarjetas.push(tarjeta);
    //USO DE TOASTR (ANIMACION DE ANUNCIO POOPUP)
    this.toastr.success('Se Registro la Tarjeta con Exito!', 'Tarjeta Agregada');
    this.form.reset();
  }

  eliminarTarjeta(index: number) {
    //console.log(index);
    //eliminamos el elemeno de la lista con el metodo Splice
    this.listaTarjetas.splice(index, 1);
    this.toastr.error('Se Elimino la Tarjeta con Exito!', 'Tarjeta Eliminada');
  }
}
