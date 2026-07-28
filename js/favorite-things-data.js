/**
 * Staff Favorite Things — sourced from weareepa.weebly.com
 * Each item links to a PDF or page with that person's favorites.
 */
const FAVORITE_THINGS = [
  {
    id: "admin",
    title: "Admin",
    items: [
      { name: "Charles Fuller", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/charles_fuller.pdf" },
      { name: "TaKira Murphy", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/takira_murphy.pdf" },
      { name: "Geoff Gorski", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/geoff_gorski.pdf" },
      { name: "Amanda Vick", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/amanda_vick.pdf" }
    ]
  },
  {
    id: "support-staff",
    title: "Support Staff",
    items: [
      { name: "Lynne Allen", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/lynne_allen.pdf" },
      { name: "Bill Prentice", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/bill_prentice.pdf" },
      { name: "Susan Hewlett", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/susan_hewlett.pdf" },
      { name: "Kim Campbell", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/kim_campbell.pdf" },
      { name: "Eleanor Bradley", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/eleanor_bradley.pdf" },
      { name: "Tamara Scherrer", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/tamara__scherrer.pdf" },
      { name: "Matthew Swain", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/matthew_swain.pdf" },
      { name: "Sarah Armstrong", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/sarah_armstrong.pdf" },
      { name: "Chasson Williams", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/william_chasson.pdf" },
      { name: "Lawrence Thames", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/lawrence_thames.pdf" },
      { name: "Nanette Merritt", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/nanette_merritt.pdf" },
      { name: "Nicole Crawford", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/nikki_crawford.pdf" },
      { name: "Dody Serpe", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/dody_serpe.pdf" },
      { name: "Monte Crowell", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/monte_crowell.pdf" }
    ]
  },
  {
    id: "grades-k-2",
    title: "Grades K-2",
    groups: [
      {
        title: "Kindergarten",
        items: [
          { name: "Lily Andersen", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/lily_andersen.pdf" },
          { name: "Ashley Darling", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/ashley_darling.pdf" },
          { name: "Tara Verunac", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/tara_verunac.pdf" },
          { name: "Jacqueline Holder", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jacqueline_holder.pdf" },
          { name: "Jamiese Scotton", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jamiese_scotton.pdf" },
          { name: "Amalia Aguiles", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/amalia_aguiles.pdf" },
          { name: "Amanda Denton", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/amanda_denton.pdf" }
        ]
      },
      {
        title: "1st Grade",
        items: [
          { name: "Caroline Pendleton", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/caroline_pendleton_.pdf" },
          { name: "Nicola Dobbs", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/nicola_dobbs.pdf" },
          { name: "Lindsay Walker", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/lindsay_walker_1.pdf" },
          { name: "Melissa Mazzio", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/melissa_mazzio.pdf" }
        ]
      },
      {
        title: "2nd Grade",
        items: [
          { name: "Lindsay Alfonso", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/lindsay_alfonso.pdf" },
          { name: "Stephanie Sikes", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/stephanie_sikes.pdf" },
          { name: "Hayley Turner", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/hayley_turner.pdf" },
          { name: "Krystle Welker", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/krystle_welker_1.pdf" },
          { name: "Natalie Abraham", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/natalie_abraham.pdf" }
        ]
      }
    ]
  },
  {
    id: "grades-3-5",
    title: "Grades 3-5",
    groups: [
      {
        title: "3rd Grade",
        items: [
          { name: "Sara Deutsch", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/sara_deutsch.pdf" },
          { name: "Heather Graham", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/heather_graham.pdf" },
          { name: "Pam Sumner", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/pam_sumner.pdf" },
          { name: "Grace Michel", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/grace_michel.pdf" }
        ]
      },
      {
        title: "4th Grade",
        items: [
          { name: "Moneta Dean", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/moneta_redecker.pdf" },
          { name: "Savannah Richards", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/savannah_richards.pdf" }
        ]
      },
      {
        title: "5th Grade",
        items: [
          { name: "Alison Hester", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/alison_hester.pdf" },
          { name: "Melissa Wilson", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/melissa_wilson.pdf" }
        ]
      }
    ]
  },
  {
    id: "middle-school",
    title: "Middle School",
    items: [
      { name: "Clay Marion", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/clay_marion.pdf" },
      { name: "Zaida Liwag", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/zaida_liwag.pdf" },
      { name: "Amber Sheely", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/amber_sheely.pdf" },
      { name: "Megan Mitchell", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/megan_mitchell.pdf" },
      { name: "Kristen Hanzer-Powell", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/kristen_hanzer-powell.pdf" },
      { name: "Chloe King", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/chloe_king.pdf" },
      { name: "Morgan Oakley", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/morgan_oakley.pdf" }
    ]
  },
  {
    id: "specialists",
    title: "Specialists",
    groups: [
      {
        title: "Lower School",
        items: [
          { name: "Amanda Cramp", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/amanda_cramp.pdf" },
          { name: "Jinhuan Lu", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jinhuan_lu.pdf" },
          { name: "Matt Ziminski", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/matt_ziminski.pdf" },
          { name: "Sydney Davis", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/sydney_davis.pdf" }
        ]
      },
      {
        title: "Upper School",
        items: [
          { name: "Kayla Dellinger", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/kayla_dellinger.pdf" },
          { name: "Jordan Cutno", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jordan_cutno.pdf" },
          { name: "Ji Nichol", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/ji_nichol.pdf" },
          { name: "Jake Patton", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jake_patton.pdf" },
          { name: "Rachel Oglesby", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/rachel_oglesby.pdf" }
        ]
      }
    ]
  },
  {
    id: "ec",
    title: "EC (Exceptional Children)",
    items: [
      { name: "Kailah Hunter", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/kailah_hunter.pdf" },
      { name: "Jeni Fister", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jeni_fister.pdf" },
      { name: "Katie Dougherty", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/katie_dougherty.pdf" },
      { name: "Gina Judge", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/gina_judge.pdf" },
      { name: "Caitlin Laird", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/caitlin_laird.pdf" },
      { name: "Cat Capano", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/cat_capano.pdf" },
      { name: "Kelly Phillips", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/kelly_phillips.pdf" },
      { name: "Jennifer Snyder", url: "https://weareepa.weebly.com/uploads/9/0/1/2/90127147/jennifer_snyder.pdf" }
    ]
  }
];
