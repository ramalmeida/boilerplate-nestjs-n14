import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

@Schema({
  collection: 'user',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
export class User {
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  cpf: number;

  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  nome: string;

  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  dataNascimento: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  nomePai: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  nomeMae: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  logradouroRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  numRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  complementoRes: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  bairroRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  cepRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  cidadeRes: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  ufRes: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  dddCel: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  telCel: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  dddRes: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  telRes: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  email: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  sexo: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  estadoCivil: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  nacionalidade: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  naturalidade: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  numDependentes: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  identidade: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  orgaoId: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  ufIdent: string;

  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  dataEmissaoIdent: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  empresa: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  logradouroTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  numeroTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  complementoTrab: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  bairroTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  cepTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  cidadeTrab: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  ufTrab: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  dddTrab: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  telTrab: number;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  cargo: string;

  @IsString()
  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  setor: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  matricula: number;

  @Expose()
  @ApiProperty()
  @Prop({ type: String })
  dataAdmissao: string;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  salario: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  banco: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  agencia: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  contaCorrente: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  tpConta: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  inss: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  ir: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  contribuicaoSindical: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  emprestimo: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  valorConsig: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  cobrancasJudiciais: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  pensaoAlimenticia: number;

  @IsNumber()
  @Expose()
  @ApiProperty()
  @Prop({ type: Number })
  outrosDescontos: number;
}

export type UserDocument = Document & User;
export const UserSchema = SchemaFactory.createForClass(User);
