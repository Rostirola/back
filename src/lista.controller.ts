import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { Lista } from './lista.entity';
import { ListaService } from './lista.service';
@Controller()
export class ListaController {

    constructor(private listaService: ListaService) {}

    @Get('/lista')
    async listaLista(): Promise<Lista[]> {
        return await this.listaService.findAll();
    }

    @Put('/lista')
    async salvarLista(@Body() lista) {
        console.log(lista);
        await this.listaService.salvar(lista);
        
        return "ok";
    }

    @Get('/lista/:codigo')
    async buscarPorCodigo(@Param() parametro): Promise<Lista> {
        return await this.listaService.findById(parametro.codigo);
    }

    @Delete('/lista/:codigo')
    async excluirLista(@Param() parametro) {
        await this.listaService.excluir(parametro.codigo);

        return "ok";
    }
}