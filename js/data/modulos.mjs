'use strict';

/**
 * MODULOS.MJS — Gerado pelo Construtor de Aulas.
 * Estrutura de módulos e aulas. O conteúdo de cada aula (exemplos,
 * exercícios, resumo) fica em js/data/questoes/aula-N.mjs.
 */
const MODULOS = [
  {
    id:      1,
    titulo:  "Nova matéria",
    materia: "Nova matéria",
    aulas: [
      {
        id:      1,
        titulo:  "Nova aula",
        arquivo: "aula-1",
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
    titulo:      "Nova etapa",
    etapas:      [1],
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
