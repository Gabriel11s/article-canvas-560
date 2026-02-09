export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  description: string;
  commonSituations: string[];
  methodology: string[];
  documents: string[];
  faq: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "familia",
    title: "Direito de Família",
    shortDescription: "Divórcio, guarda, pensão alimentícia e questões familiares.",
    icon: "Heart",
    description:
      "O Direito de Família trata das relações jurídicas entre membros de uma família, abrangendo casamento, união estável, filiação, guarda de filhos, pensão alimentícia e partilha de bens. Se você enfrenta uma situação que envolve seus laços familiares, é importante buscar orientação jurídica adequada.",
    commonSituations: [
      "Divórcio consensual ou litigioso",
      "Dissolução de união estável",
      "Guarda de filhos (compartilhada ou unilateral)",
      "Fixação, revisão ou exoneração de alimentos",
      "Partilha de bens",
      "Reconhecimento ou negatória de paternidade",
      "Regulamentação de visitas",
      "Alienação parental",
    ],
    methodology: [
      "Análise inicial da situação e documentos relevantes",
      "Orientação sobre opções legais e possíveis caminhos",
      "Tentativa de resolução amigável, quando viável",
      "Elaboração de petições e acompanhamento processual",
      "Representação em audiências e mediações",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Certidão de casamento ou declaração de união estável",
      "Certidão de nascimento dos filhos",
      "Comprovantes de renda",
      "Documentos de propriedade de bens (se aplicável)",
      "Comprovante de endereço",
    ],
    faq: [
      {
        question: "Quanto tempo demora um processo de divórcio?",
        answer:
          "Depende da modalidade. O divórcio consensual em cartório pode ser concluído em poucas semanas. Já o litigioso pode levar meses ou mais, conforme a complexidade e o trâmite judicial.",
      },
      {
        question: "Posso resolver o divórcio sem ir ao fórum?",
        answer:
          "Sim, se ambos concordarem e não houver filhos menores ou incapazes, é possível realizar o divórcio consensual diretamente em cartório.",
      },
      {
        question: "Como é calculada a pensão alimentícia?",
        answer:
          "Não existe uma fórmula fixa. O juiz considera a necessidade de quem recebe e a possibilidade de quem paga, além do padrão de vida da família.",
      },
      {
        question: "Guarda compartilhada é obrigatória?",
        answer:
          "A guarda compartilhada é a regra no ordenamento jurídico brasileiro, salvo quando não atender ao melhor interesse da criança.",
      },
      {
        question: "O que acontece com os bens no divórcio?",
        answer:
          "A partilha depende do regime de bens adotado no casamento (comunhão parcial, total ou separação). Cada situação exige análise específica.",
      },
    ],
  },
  {
    slug: "consumidor",
    title: "Direito do Consumidor",
    shortDescription: "Relações de consumo, cobranças indevidas e contratos.",
    icon: "ShieldCheck",
    description:
      "O Direito do Consumidor protege quem adquire produtos ou serviços como destinatário final. Se você enfrentou problemas com compras, cobranças indevidas, propaganda enganosa ou vícios em produtos, a legislação consumerista oferece mecanismos de proteção.",
    commonSituations: [
      "Cobrança indevida ou abusiva",
      "Negativação indevida (SPC/Serasa)",
      "Produto com defeito ou vício",
      "Descumprimento de oferta ou contrato",
      "Propaganda enganosa ou abusiva",
      "Problemas com planos de saúde",
      "Cancelamento de serviços",
      "Atraso na entrega de imóvel ou produto",
    ],
    methodology: [
      "Análise da relação de consumo e documentos",
      "Tentativa de resolução administrativa (SAC, Procon, Consumidor.gov)",
      "Notificação extrajudicial, quando cabível",
      "Ajuizamento de ação judicial, se necessário",
      "Acompanhamento até a resolução definitiva",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Comprovante de compra (nota fiscal, recibo, contrato)",
      "Registros de reclamação (protocolos, e-mails, prints)",
      "Comprovante de pagamento ou cobrança",
      "Laudo ou foto do produto defeituoso (se aplicável)",
    ],
    faq: [
      {
        question: "Fui negativado indevidamente. O que posso fazer?",
        answer:
          "Você pode solicitar a exclusão do seu nome e, dependendo das circunstâncias, pleitear indenização por danos morais. É importante reunir comprovantes da cobrança indevida.",
      },
      {
        question: "Qual o prazo para reclamar de um produto com defeito?",
        answer:
          "Para produtos não duráveis, 30 dias. Para duráveis, 90 dias, contados a partir da entrega ou da constatação do vício oculto.",
      },
      {
        question: "Posso desistir de uma compra online?",
        answer:
          "Sim, o CDC prevê o direito de arrependimento de 7 dias corridos para compras realizadas fora do estabelecimento (internet, telefone).",
      },
      {
        question: "A empresa se recusa a resolver. O que fazer?",
        answer:
          "Registre reclamação no Procon ou Consumidor.gov.br. Se não houver solução administrativa, a via judicial pode ser necessária.",
      },
      {
        question: "Preciso de advogado para ação no Juizado Especial?",
        answer:
          "Para causas de até 20 salários mínimos, o advogado não é obrigatório. Acima disso, até o limite de 40 salários mínimos, a representação é necessária.",
      },
    ],
  },
  {
    slug: "previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Aposentadoria, benefícios do INSS e questões previdenciárias.",
    icon: "Clock",
    description:
      "O Direito Previdenciário cuida da proteção social dos trabalhadores e segurados, abrangendo aposentadorias, auxílios, pensões e demais benefícios administrados pelo INSS. Se você tem dúvidas sobre seus direitos previdenciários, busque orientação para entender sua situação.",
    commonSituations: [
      "Aposentadoria por idade, tempo de contribuição ou especial",
      "Auxílio-doença / Benefício por incapacidade temporária",
      "Aposentadoria por invalidez / Benefício por incapacidade permanente",
      "Pensão por morte",
      "BPC/LOAS (Benefício de Prestação Continuada)",
      "Revisão de benefício",
      "Auxílio-acidente",
      "Descontos indevidos em benefício",
    ],
    methodology: [
      "Análise do histórico contributivo (CNIS) e documentos",
      "Simulação de cenários e planejamento previdenciário",
      "Requerimento administrativo junto ao INSS",
      "Recurso administrativo em caso de indeferimento",
      "Ação judicial quando necessário",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Carteira de trabalho (CTPS)",
      "Extrato de contribuições (CNIS)",
      "Laudos médicos (para benefícios por incapacidade)",
      "Comprovantes de atividade especial (PPP, LTCAT)",
      "Certidão de tempo de contribuição (se servidor)",
    ],
    faq: [
      {
        question: "Quando posso me aposentar?",
        answer:
          "Depende de vários fatores: idade, tempo de contribuição, regras de transição aplicáveis. Uma análise individualizada do seu histórico é fundamental.",
      },
      {
        question: "Meu benefício foi negado. E agora?",
        answer:
          "Você pode interpor recurso administrativo junto ao INSS ou, se necessário, buscar a via judicial para reverter a decisão.",
      },
      {
        question: "O que é planejamento previdenciário?",
        answer:
          "É a análise detalhada do seu histórico para identificar a melhor data e modalidade de aposentadoria, considerando regras atuais e de transição.",
      },
      {
        question: "Posso receber auxílio-doença e trabalhar?",
        answer:
          "Em regra, não. O auxílio-doença pressupõe incapacidade temporária para o trabalho. O recebimento indevido pode gerar obrigação de devolução.",
      },
      {
        question: "O que é o BPC/LOAS?",
        answer:
          "É um benefício assistencial no valor de um salário mínimo destinado a idosos (65+) ou pessoas com deficiência que comprovem baixa renda familiar.",
      },
    ],
  },
  {
    slug: "civel",
    title: "Direito Cível",
    shortDescription: "Contratos, responsabilidade civil, cobranças e obrigações.",
    icon: "Scale",
    description:
      "O Direito Cível abrange as relações entre pessoas (físicas e jurídicas) no âmbito patrimonial e obrigacional. Inclui contratos, responsabilidade civil, cobranças, indenizações e diversas outras questões do dia a dia jurídico.",
    commonSituations: [
      "Cobranças e execuções",
      "Indenização por danos materiais e/ou morais",
      "Revisão ou rescisão de contratos",
      "Responsabilidade civil (acidentes, erros, etc.)",
      "Ações de obrigação de fazer ou não fazer",
      "Prestação de contas",
      "Ações declaratórias e constitutivas",
    ],
    methodology: [
      "Análise jurídica da situação e documentos",
      "Tentativa de composição amigável ou mediação",
      "Elaboração de notificação extrajudicial",
      "Ajuizamento e acompanhamento de ação judicial",
      "Negociação e cumprimento de sentença",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Contrato ou documento que origina a demanda",
      "Comprovantes de pagamento ou prejuízo",
      "Correspondências e comunicações trocadas",
      "Comprovante de endereço",
      "Provas do fato (fotos, laudos, testemunhas)",
    ],
    faq: [
      {
        question: "Qual o prazo para entrar com uma ação cível?",
        answer:
          "Varia conforme o tipo de ação. A prescrição geral é de 10 anos, mas existem prazos específicos (3 anos para reparação civil, 5 anos contra a Fazenda Pública, etc.).",
      },
      {
        question: "Posso cobrar alguém que me deve?",
        answer:
          "Sim, desde que você tenha provas da dívida (contrato, cheque, nota promissória, mensagens, etc.). O tipo de ação depende da natureza do título.",
      },
      {
        question: "O que são danos morais?",
        answer:
          "É a indenização por lesão a direitos da personalidade (honra, imagem, dignidade). Não é qualquer aborrecimento que gera dano moral — exige-se uma ofensa relevante.",
      },
      {
        question: "Preciso de advogado para ação no Juizado Especial Cível?",
        answer:
          "Para causas até 20 salários mínimos, a representação por advogado é facultativa. Acima disso, até 40 salários mínimos, é obrigatória.",
      },
      {
        question: "Mediação e conciliação são obrigatórias?",
        answer:
          "Em muitos casos sim. O CPC incentiva a autocomposição, e o juiz pode designar audiência de conciliação ou mediação antes da contestação.",
      },
    ],
  },
  {
    slug: "imobiliario",
    title: "Direito Imobiliário",
    shortDescription: "Compra, venda, locação e questões envolvendo imóveis.",
    icon: "Home",
    description:
      "O Direito Imobiliário trata das relações jurídicas sobre bens imóveis, incluindo compra e venda, locação, usucapião, condomínio e regularização de propriedade. Se você tem questões relacionadas a imóveis, a orientação jurídica pode evitar problemas futuros.",
    commonSituations: [
      "Compra e venda de imóvel",
      "Locação (despejo, revisão, renovação)",
      "Usucapião (ordinária, extraordinária, especial)",
      "Regularização de imóvel",
      "Questões condominiais",
      "Atraso na entrega de imóvel na planta",
      "Retificação de área ou registro",
      "Adjudicação compulsória",
    ],
    methodology: [
      "Análise documental do imóvel e certidões",
      "Assessoria na elaboração ou revisão de contratos",
      "Negociação entre as partes envolvidas",
      "Ajuizamento de ação judicial quando necessário",
      "Acompanhamento de registros e averbações",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Matrícula atualizada do imóvel",
      "Contrato de compra e venda ou locação",
      "IPTU e certidões negativas",
      "Comprovantes de pagamento",
      "Planta ou croqui (em casos de usucapião ou retificação)",
    ],
    faq: [
      {
        question: "O que é usucapião?",
        answer:
          "É o modo de aquisição de propriedade pela posse prolongada e ininterrupta, desde que preenchidos os requisitos legais (tempo, posse mansa, boa-fé, em alguns casos).",
      },
      {
        question: "Comprei um imóvel e o vendedor não quer escriturar. O que fazer?",
        answer:
          "Pode-se ajuizar ação de adjudicação compulsória para obrigar o vendedor a outorgar a escritura, desde que comprovado o pagamento integral.",
      },
      {
        question: "Inquilino não paga aluguel. Como proceder?",
        answer:
          "É possível ajuizar ação de despejo por falta de pagamento, cumulada com cobrança dos aluguéis em atraso.",
      },
      {
        question: "Preciso regularizar meu imóvel. Por onde começo?",
        answer:
          "O primeiro passo é verificar a situação registral (matrícula no cartório). A partir daí, identificamos o procedimento adequado (escritura, usucapião, retificação, etc.).",
      },
      {
        question: "Quais os cuidados na compra de um imóvel?",
        answer:
          "Verifique a matrícula atualizada, certidões negativas do vendedor, situação fiscal do imóvel (IPTU), e se não há ações judiciais que possam afetar o negócio.",
      },
    ],
  },
  {
    slug: "trabalhista",
    title: "Direito Trabalhista",
    shortDescription: "Relações de trabalho, rescisão, direitos e verbas trabalhistas.",
    icon: "Briefcase",
    description:
      "O Direito Trabalhista regula as relações entre empregadores e empregados, garantindo direitos fundamentais como salário, férias, FGTS, seguro-desemprego e condições dignas de trabalho. Se você foi demitido, tem verbas a receber ou enfrenta irregularidades no trabalho, busque orientação.",
    commonSituations: [
      "Rescisão de contrato de trabalho (justa causa, sem justa causa)",
      "Verbas rescisórias não pagas ou incorretas",
      "Horas extras não remuneradas",
      "Assédio moral ou sexual no trabalho",
      "Acidente de trabalho",
      "Vínculo empregatício não reconhecido",
      "Desvio ou acúmulo de função",
      "Estabilidades (gestante, acidentária, pré-aposentadoria)",
    ],
    methodology: [
      "Análise dos documentos e relato da situação",
      "Cálculo de verbas trabalhistas devidas",
      "Tentativa de acordo extrajudicial (quando possível)",
      "Ajuizamento de reclamação trabalhista",
      "Acompanhamento de audiências e cumprimento de sentença",
    ],
    documents: [
      "Documento de identidade (RG/CPF)",
      "Carteira de trabalho (CTPS) — física ou digital",
      "Holerites / contracheques",
      "Termo de rescisão (TRCT)",
      "Extrato do FGTS",
      "Contrato de trabalho (se houver)",
      "Comprovantes de horas extras, mensagens ou registros",
    ],
    faq: [
      {
        question: "Fui demitido sem justa causa. Quais meus direitos?",
        answer:
          "Você tem direito a aviso prévio, saldo de salário, férias proporcionais + 1/3, 13º proporcional, multa de 40% do FGTS, saque do FGTS e seguro-desemprego (se preencher os requisitos).",
      },
      {
        question: "Qual o prazo para entrar com ação trabalhista?",
        answer:
          "O prazo prescricional é de 2 anos a partir da data de desligamento, podendo cobrar os últimos 5 anos de direitos.",
      },
      {
        question: "Trabalho sem carteira assinada. Tenho direitos?",
        answer:
          "Sim. Havendo relação de emprego (subordinação, habitualidade, onerosidade, pessoalidade), todos os direitos trabalhistas são devidos, independente do registro em carteira.",
      },
      {
        question: "O que caracteriza assédio moral no trabalho?",
        answer:
          "Condutas repetitivas e prolongadas que exponham o trabalhador a situações humilhantes, constrangedoras ou degradantes durante a jornada de trabalho.",
      },
      {
        question: "Posso fazer acordo com a empresa?",
        answer:
          "Sim, a CLT prevê o distrato por acordo mútuo (art. 484-A), além da possibilidade de homologação de acordo extrajudicial na Justiça do Trabalho.",
      },
    ],
  },
];