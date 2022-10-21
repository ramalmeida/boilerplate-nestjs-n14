import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cpf: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  nome: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dataNascimento: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  nomePai: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  nomeMae: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  logradouroRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  numRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  complementoRes: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  bairroRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cepRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cidadeRes: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  ufRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dddCel: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  telCel: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dddRes: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  telRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  sexo: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  estadoCivil: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  nacionalidade: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  naturalidade: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  numDependentes: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  identidade: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  orgaoId: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  ufIdent: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dataEmissaoIdent: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  logradouroTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  numeroTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  complementoTrab: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  bairroTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cepTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cidadeTrab: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  ufTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dddTrab: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  telTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cargo: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  setor: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  matricula: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  dataAdmissao: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  salario: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  banco: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  agencia: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  contaCorrente: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  tpConta: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  inss: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  ir: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  contribuicaoSindical: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  emprestimo: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  valorConsig: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  cobrancasJudiciais: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  pensaoAlimenticia: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  outrosDescontos: number;
}
