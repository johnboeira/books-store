import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router,
      private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso'])
    }else{
      alert('formulário inválido')
    }
      console.log(form);
  }

  ConsultarCEP(ev: any, form: NgForm){
    const cep = ev.target.value;
    if(cep != ''){
      this.consultaCepService.consultaCEP(cep).subscribe((resultado: any) => {
        this.populandoIndereco(resultado, form);
      })
    }
    
  }
  
  private populandoIndereco(resultadoAPI: any, form: NgForm) {
    form.form.patchValue({
      endereco: resultadoAPI.logradouro,
      complemento: resultadoAPI.complemento,
      bairro: resultadoAPI.bairro,
      cidade: resultadoAPI.localidade,
      estado: resultadoAPI.uf
    })
  }
}
