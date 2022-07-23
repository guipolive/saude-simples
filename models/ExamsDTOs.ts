export interface ColesterolExamDTO {
  uuid: string;
  user_id: string;
  colesterol_total: string;
  colesterol_hdl: string;
  colesterol_ldl: string;
  colesterol_nao_hdl: string;
  data_preenchimento: string;
}

export interface BioImpedanciaExamDTO {
  uuid: string;
  user_id: string;
  massa_magra: string;
  massa_muscular: string;
  qt_agua_corpo: string;
  gdra_visceral: string;
  densidade_ossea: string;
  massa_gorda: string;
  data_preenchimento: string;
}

export interface SangueExamDTO {
  uuid: string;
  user_id: string;
  eritograma: EritogramaSubExamDTO;
  laucoma: LaucomaSubExamDTO;
  data_preenchimento: string;
}

export interface LaucomaSubExamDTO {
  leucocitos: number;
  bastonetes: number;
  segmentados: number;
  eosinofilos: number;
  basofilos: number;
  linfocitos: number;
  monocitos: number;
}

export interface EritogramaSubExamDTO {
  hemacias: number;
  hemoglobina: number;
  hematocrito: number;
  vcm: number;
  hcm: number;
  chcm: number;
  rdw: number;
}
