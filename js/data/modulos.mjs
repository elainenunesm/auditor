'use strict';

/**
 * MODULOS.MJS — Gerado pelo Construtor de Aulas.
 * Estrutura de módulos e aulas. O conteúdo de cada aula (exemplos,
 * exercícios, resumo) fica em js/data/questoes/aula-N.mjs.
 */
const MODULOS = [
  {
    id:      1,
    titulo:  "Direito Tributário",
    materia: "Direito Tributário",
    aulas: [
      {
        id:      1,
        titulo:  "Aula 1 - Conceitos iniciais",
        arquivo: "aula-1",
        icone:   'padrao',
      }
    ],
  },
  {
    id:      2,
    titulo:  "Contabilidade Geral",
    materia: "Contabilidade Geral",
    aulas: [
      {
        id:      3,
        titulo:  "Nova aula",
        arquivo: "aula-3",
        icone:   'padrao',
      }
    ],
  },
  {
    id:      3,
    titulo:  "Nova matéria",
    materia: "Nova matéria",
    aulas: [
      {
        id:      2,
        titulo:  "Nova aula",
        arquivo: "aula-2",
        icone:   'padrao',
      }
    ],
  }
];

/**
 * NIVEIS.JS — Agrupa etapas em ciclos.
 */
const NIVEIS = [
  {
    id:          1,
    titulo:      "Etapa 1 - Conceitos",
    etapas:      [1, 2],
    insigniaUrl: "",
  },
  {
    id:          2,
    titulo:      "Nova etapa",
    etapas:      [3],
    insigniaUrl: "",
  }
];

/**
 * TRILHAS — caminhos opcionais compostos por um subconjunto dos ciclos (NIVEIS). Os ciclos que
 * não aparecem em nenhuma trilha são a sequência básica, sempre liberada; a aluna só pode
 * escolher uma trilha depois de concluir todos eles (ver vendor/estudo/js/niveis.mjs).
 */
const TRILHAS = [

];
