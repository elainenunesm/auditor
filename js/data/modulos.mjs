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
        titulo:  "Aula 1 - Conceitos iniciais - D. Tributário",
        arquivo: "aula-1",
        icone:   'padrao',
      },
      {
        id:      5,
        titulo:  "Resumo 1 - Conceitos iniciais - D. Tributário",
        arquivo: "aula-5",
        icone:   'padrao',
      },
      {
        id:      6,
        titulo:  "Aula 2 - Conceitos - Constituição art.146 - D. Tributário",
        arquivo: "aula-6",
        icone:   'padrao',
      },
      {
        id:      8,
        titulo:  "Resumo 2 - Conceitos e constituição art. 146 - D. Tributário",
        arquivo: "aula-8",
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
        titulo:  "Aula 1 - Conceitos iniciais - Contabilidade G.",
        arquivo: "aula-3",
        icone:   'padrao',
      },
      {
        id:      7,
        titulo:  "Resumo 1 - Conceitos iniciais - Contabilidade G.",
        arquivo: "aula-7",
        icone:   'padrao',
      },
      {
        id:      10,
        titulo:  "Aula 2 - Conceitos iniciais - Contabilidade G.",
        arquivo: "aula-10",
        icone:   'padrao',
      },
      {
        id:      11,
        titulo:  "Nova aula",
        arquivo: "aula-11",
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
  }
];

/**
 * TRILHAS — caminhos opcionais compostos por um subconjunto dos ciclos (NIVEIS). Os ciclos que
 * não aparecem em nenhuma trilha são a sequência básica, sempre liberada; a aluna só pode
 * escolher uma trilha depois de concluir todos eles (ver vendor/estudo/js/niveis.mjs).
 */
const TRILHAS = [

];
