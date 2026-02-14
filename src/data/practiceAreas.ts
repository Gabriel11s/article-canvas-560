export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  description: string;
  commonSituations: string[];
  methodology: string[];
  documents: string[];
  observations?: string;
  faq: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "familia-e-sucessoes",
    title: "Direito de Família e Sucessões",
    shortDescription: "Divórcio, guarda, alimentos, inventário e questões familiares e sucessórias.",
    icon: "Heart",
    description:
      "O Direito de Família e Sucessões trata das relações jurídicas entre membros de uma família, abrangendo casamento, união estável, filiação, guarda de filhos, pensão alimentícia, partilha de bens, inventário e arrolamento. Se você enfrenta uma situação que envolve seus laços familiares ou questões sucessórias, é fundamental buscar orientação jurídica adequada.",
    commonSituations: [
      "Divórcio (consensual e litigioso)",
      "Reconhecimento e dissolução de união estável",
      "Guarda, convivência e regulamentação de visitas",
      "Alimentos (fixação, revisão, exoneração e execução)",
      "Investigação/reconhecimento de paternidade",
      "Inventário, arrolamento e partilha de bens",
      "Acordos extrajudiciais e homologações",
    ],
    methodology: [
      "Análise inicial da situação e documentos relevantes",
      "Orientação sobre opções legais e possíveis caminhos",
      "Tentativa de resolução amigável, quando viável",
      "Elaboração de petições e acompanhamento processual",
      "Representação em audiências e mediações",
    ],
    documents: [
      "Documento de identidade e CPF das partes",
      "Comprovante de endereço",
      "Certidões (casamento e nascimento dos filhos)",
      "Comprovantes de renda (holerites, extratos, IR, pró-labore)",
      "Comprovantes de despesas relevantes (principalmente dos menores)",
      "Documentos de bens (veículos, imóveis, contratos), quando houver partilha",
      "Outras provas úteis (conversas/prints, recibos, etc.), quando pertinentes",
    ],
    observations: "Atuação exclusivamente na esfera cível/família. Demandas criminais não são atendidas.",
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
        question: "Em casos de alimentos/guarda, é possível pedir liminar?",
        answer:
          "Sim, quando há urgência comprovada, é possível requerer tutela de urgência para fixação provisória de alimentos ou regulamentação de guarda.",
      },
      {
        question: "O que acontece com os bens no divórcio?",
        answer:
          "A partilha depende do regime de bens adotado no casamento (comunhão parcial, total ou separação). Cada situação exige análise específica.",
      },
    ],
  },
  {
    slug: "previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Aposentadoria, benefícios do INSS, BPC/LOAS e questões previdenciárias.",
    icon: "Clock",
    description:
      "O Direito Previdenciário cuida da proteção social dos trabalhadores e segurados, abrangendo aposentadorias, auxílios, pensões e demais benefícios administrados pelo INSS. Se você tem dúvidas sobre seus direitos previdenciários, busque orientação para entender sua situação.",
    commonSituations: [
      "Benefícios por incapacidade (auxílio por incapacidade temporária e aposentadoria por incapacidade permanente)",
      "BPC/LOAS (pessoa com deficiência e idoso)",
      "Aposentadoria por idade/tempo e regras de transição",
      "Reconhecimento de atividade rural e especial",
      "Pensão por morte (e demais benefícios por dependência)",
      "Recursos administrativos e ações judiciais contra o INSS",
      "Cumprimento de sentença (RPV/Precatório), quando aplicável",
    ],
    methodology: [
      "Análise do histórico contributivo (CNIS) e documentos",
      "Simulação de cenários e planejamento previdenciário",
      "Requerimento administrativo junto ao INSS",
      "Recurso administrativo em caso de indeferimento",
      "Ação judicial quando necessário",
    ],
    documents: [
      "RG/CPF e comprovante de residência",
      "CNIS e carteira de trabalho",
      "Documentos de contribuição e vínculos (carnês/guias, contratos, etc.)",
      "Laudos, atestados, exames e receitas (para incapacidade/deficiência)",
      "Provas de atividade rural (notas, declarações, sindicato, contratos), quando aplicável",
      "Documentos pessoais do dependente (para pensão) e certidões",
      "Processos e decisões anteriores, se houver",
    ],
    observations: "A análise documental prévia é essencial. Em alguns casos, haverá necessidade de perícia médica e/ou social.",
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
        question: "No INSS, dá para resolver no administrativo ou já precisa ação?",
        answer:
          "Depende do caso. Muitas vezes o requerimento administrativo é o primeiro passo obrigatório. Se negado, cabe recurso ou ação judicial.",
      },
      {
        question: "BPC/LOAS: quais são os critérios e como comprovar?",
        answer:
          "O BPC exige comprovação de deficiência ou idade (65+) e renda familiar per capita de até 1/4 do salário mínimo. A comprovação envolve laudos, documentos de renda e avaliação social/médica pelo INSS.",
      },
      {
        question: "Aposentadoria rural: que provas preciso?",
        answer:
          "São aceitas notas de produtor, contratos de arrendamento, declarações de sindicato, certidões de imóvel rural, entre outras provas materiais do efetivo exercício da atividade.",
      },
    ],
  },
  {
    slug: "imobiliario",
    title: "Direito Imobiliário e Regularização",
    shortDescription: "Usucapião, regularização de imóveis, posse e contratos imobiliários.",
    icon: "Home",
    description:
      "O Direito Imobiliário trata das relações jurídicas sobre bens imóveis, incluindo usucapião, regularização fundiária, adjudicação compulsória, ações possessórias e contratos imobiliários. Se você precisa regularizar seu imóvel ou tem questões envolvendo posse e propriedade, busque orientação jurídica especializada.",
    commonSituations: [
      "Usucapião (judicial e extrajudicial)",
      "Regularização de imóveis e retificação de registro",
      "Adjudicação compulsória",
      "Ações possessórias (manutenção, reintegração e imissão na posse)",
      "Contratos imobiliários (compra e venda, distrato, obrigações)",
      "Indenizações e obrigações de fazer relacionadas a imóveis",
      "Notificações e medidas preventivas",
    ],
    methodology: [
      "Análise documental do imóvel e certidões",
      "Assessoria na elaboração ou revisão de contratos",
      "Negociação entre as partes envolvidas",
      "Ajuizamento de ação judicial quando necessário",
      "Acompanhamento de registros e averbações",
    ],
    documents: [
      "Documentos pessoais e comprovante de endereço",
      "Matrícula/certidão de inteiro teor e/ou escritura/contrato",
      "Comprovantes de posse e tempo (IPTU, contas, recibos, fotos)",
      "Planta e memorial descritivo, quando necessário",
      "Declarações de confrontantes/vizinhos e croqui, quando aplicável",
      "Comprovantes de pagamento e comunicações (e-mail/WhatsApp), quando houver contrato",
      "Certidões/ônus e documentos do vendedor, quando cabível",
    ],
    observations: "Dependendo do caso, pode ser necessária a atuação conjunta com engenheiro/arquiteto para planta e memorial.",
    faq: [
      {
        question: "O que é usucapião?",
        answer:
          "É o modo de aquisição de propriedade pela posse prolongada e ininterrupta, desde que preenchidos os requisitos legais (tempo, posse mansa, boa-fé, em alguns casos).",
      },
      {
        question: "Usucapião: quanto tempo preciso ter de posse e que provas valem?",
        answer:
          "Depende da modalidade (5, 10 ou 15 anos). São aceitos IPTU, contas de luz/água, recibos, declarações de vizinhos, fotos e outros documentos que comprovem a posse contínua.",
      },
      {
        question: "Comprei um imóvel e o vendedor não quer escriturar. O que fazer?",
        answer:
          "Pode-se ajuizar ação de adjudicação compulsória para obrigar o vendedor a outorgar a escritura, desde que comprovado o pagamento integral.",
      },
      {
        question: "Preciso regularizar meu imóvel. Por onde começo?",
        answer:
          "O primeiro passo é verificar a situação registral (matrícula no cartório). A partir daí, identificamos o procedimento adequado (escritura, usucapião, retificação, etc.).",
      },
      {
        question: "Adjudicação compulsória: quando cabe?",
        answer:
          "Cabe quando o promitente vendedor se recusa a outorgar a escritura definitiva após o comprador ter cumprido integralmente suas obrigações contratuais.",
      },
    ],
  },
  {
    slug: "bancario",
    title: "Direito Bancário",
    shortDescription: "Revisão de contratos, empréstimos, fraudes bancárias e descontos indevidos.",
    icon: "ShieldCheck",
    description:
      "O Direito Bancário trata das relações entre consumidores e instituições financeiras, abrangendo revisão de contratos, empréstimos, financiamentos, fraudes e cobranças indevidas. Se você foi vítima de fraude, tem descontos indevidos em folha/benefício ou precisa revisar um contrato bancário, busque orientação jurídica.",
    commonSituations: [
      "Revisão de contratos bancários/financeiros (juros, encargos, cláusulas abusivas)",
      "Empréstimos e financiamentos (consignado, cartão consignado/RMC, refinanciamentos)",
      "Busca e apreensão em alienação fiduciária (defesa, purgação da mora)",
      "Cobranças bancárias indevidas e discussões sobre evolução do débito",
      "Golpes e fraudes bancárias (contratação não reconhecida, portabilidade fraudulenta)",
      "Fraudes em transações (PIX/TED indevidas, compras não reconhecidas, invasão de conta)",
      "Medidas para cessar descontos indevidos em folha/benefício e buscar restituição",
    ],
    methodology: [
      "Análise contratual e verificação de encargos",
      "Levantamento documental completo (extratos, contratos, demonstrativos)",
      "Tentativa de resolução administrativa (SAC/Ouvidoria)",
      "Ajuizamento de ação judicial com pedido de tutela quando cabível",
      "Acompanhamento processual até resolução definitiva",
    ],
    documents: [
      "Documentos pessoais e comprovante de endereço",
      "Contrato/termo de adesão e demonstrativo do produto",
      "Extratos bancários do período e comprovantes das transações contestadas",
      "Faturas e demonstrativos (cartão/consignado/RMC), quando aplicável",
      "Contracheques e/ou extrato do benefício (INSS) com histórico de descontos",
      "Comunicações e protocolos (SAC/Ouvidoria), e-mails, prints de atendimento",
      "Boletim de ocorrência/relato do fato (quando houve golpe/fraude)",
      "Comprovantes de pagamento/renegociação e documentos de eventual negativação",
    ],
    observations: "A viabilidade do caso bancário costuma depender da documentação completa. Quando o banco não apresenta documentos essenciais, pode ser necessária medida judicial de exibição. Em casos de urgência, pode ser cabível tutela para suspensão de atos até apuração técnica.",
    faq: [
      {
        question: "Como saber se meu contrato bancário tem cláusulas abusivas?",
        answer:
          "É necessária uma análise técnica do contrato para verificar taxas, encargos e capitalização de juros. Nem toda taxa alta é abusiva — é preciso comparar com os parâmetros legais e de mercado.",
      },
      {
        question: "Fui vítima de fraude bancária. O que fazer primeiro?",
        answer:
          "Registre boletim de ocorrência, entre em contato com o banco (SAC/Ouvidoria) e reúna todos os comprovantes. Busque orientação jurídica para avaliar medidas cabíveis.",
      },
      {
        question: "Estão descontando indevidamente do meu benefício/folha. Tem solução?",
        answer:
          "Sim, é possível buscar judicialmente a cessação dos descontos e, dependendo do caso, a restituição dos valores e indenização por danos.",
      },
      {
        question: "Busca e apreensão do veículo: posso me defender?",
        answer:
          "Sim. É possível discutir abusividades no contrato, purgar a mora (pagar o que é devido) e apresentar defesa para manter a posse do veículo.",
      },
      {
        question: "O banco se recusa a fornecer documentos. O que fazer?",
        answer:
          "É possível ajuizar ação de exibição de documentos para obrigar a instituição a apresentar contratos, extratos e demonstrativos necessários à análise do caso.",
      },
    ],
  },
  {
    slug: "consumidor",
    title: "Direito do Consumidor",
    shortDescription: "Fraudes, negativação indevida, cobranças abusivas e problemas com produtos/serviços.",
    icon: "Scale",
    description:
      "O Direito do Consumidor protege quem adquire produtos ou serviços como destinatário final. Se você enfrentou fraudes, negativação indevida, cobranças abusivas, problemas com viagens aéreas, compras online ou vícios em produtos, a legislação consumerista oferece mecanismos de proteção.",
    commonSituations: [
      "Fraudes em compras e contratações (dados usados por terceiros)",
      "Negativação indevida e cobranças abusivas (Serasa/SCPC)",
      "Danos morais e materiais por descumprimento contratual",
      "Problemas com viagem aérea (cancelamento, atraso, overbooking, extravio)",
      "Relações com operadoras/serviços essenciais (internet, telefonia, energia)",
      "Compras online: não entrega, troca/devolução, arrependimento",
      "Garantia, vícios e defeitos: conserto, substituição, restituição",
    ],
    methodology: [
      "Análise da relação de consumo e documentos",
      "Tentativa de resolução administrativa (SAC, Procon, Consumidor.gov)",
      "Notificação extrajudicial, quando cabível",
      "Ajuizamento de ação judicial, se necessário",
      "Acompanhamento até a resolução definitiva",
    ],
    documents: [
      "Documentos pessoais e comprovante de endereço",
      "Notas fiscais, comprovantes de compra e pagamento",
      "Prints do anúncio/oferta e termos da contratação",
      "Protocolos e atendimentos (SAC/Ouvidoria), e-mails e reclamações administrativas",
      "Comprovantes do prejuízo (recibos, despesas extras, perda de reserva)",
      "Provas de negativação/cobrança (consulta Serasa/SCPC, cartas, SMS)",
      "Em viagem aérea: bilhetes, cartões de embarque, comprovantes de atraso",
      "Em vício/defeito: fotos/vídeos, laudos simples, ordens de serviço",
    ],
    observations: "A condução do caso costuma ser fortemente documental. Em situações urgentes — como negativação indevida ou cancelamento sem reembolso — pode ser cabível pedido liminar para cessar o dano.",
    faq: [
      {
        question: "Meu nome foi negativado indevidamente: o que fazer primeiro?",
        answer:
          "Reúna comprovantes da cobrança indevida, registre reclamação no Procon ou Consumidor.gov e busque orientação jurídica para avaliar pedido de exclusão e possível indenização.",
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
        question: "Tive problema com viagem aérea. Tenho direito a indenização?",
        answer:
          "Depende do caso. Atrasos significativos, cancelamentos, overbooking e extravio de bagagem podem gerar direito a assistência material e, em alguns casos, indenização por danos morais e materiais.",
      },
      {
        question: "A empresa se recusa a resolver. O que fazer?",
        answer:
          "Registre reclamação no Procon ou Consumidor.gov.br. Se não houver solução administrativa, a via judicial pode ser necessária.",
      },
    ],
  },
  {
    slug: "civel",
    title: "Direito Cível",
    shortDescription: "Contratos, responsabilidade civil, cobranças e obrigações — casos selecionados.",
    icon: "Briefcase",
    description:
      "O Direito Cível abrange as relações entre pessoas (físicas e jurídicas) no âmbito patrimonial e obrigacional. Inclui contratos, responsabilidade civil, cobranças, indenizações e diversas questões do dia a dia jurídico. Atuação em casos selecionados.",
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
        question: "Existe possibilidade de acordo antes/fora do processo?",
        answer:
          "Sim, a mediação e conciliação são incentivadas pelo Código de Processo Civil. Muitos casos podem ser resolvidos extrajudicialmente.",
      },
      {
        question: "O que são danos morais?",
        answer:
          "É a indenização por lesão a direitos da personalidade (honra, imagem, dignidade). Não é qualquer aborrecimento que gera dano moral — exige-se uma ofensa relevante.",
      },
      {
        question: "Mediação e conciliação são obrigatórias?",
        answer:
          "Em muitos casos sim. O CPC incentiva a autocomposição, e o juiz pode designar audiência de conciliação ou mediação antes da contestação.",
      },
    ],
  },
];
