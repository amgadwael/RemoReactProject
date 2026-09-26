const products = [
  {
    id: 1,
    name: "برازيلي سانتوس",
    price: 320,
    category: "تحميص متوسط",
    image:
      "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/708345356_122261393900174179_8584885636464833810_n.jpg?stp=c0.106.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=JfKaBC-Yj88Q7kNvwGEcWYv&_nc_oc=AdqRNWaYpgGFkdYZso9ii2POmwmcZAI8E2Pp2dsRm2nPLMW_wYuaaKnt_UfZtF0jyzI&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=JUcdggtlgatjbvMA3yMcBQ&_nc_ss=732a8&oh=00_AQKTlp4cdKEUncWsb7XrDVBQ8i89-LRL24iBxXEbfQHTiQ&oe=6ABDA39C",
    description:
      "قهوة ناعمة بطعم متوازن ولمسات من الشوكولاتة والمكسرات.",
  },
  {
    id: 2,
    name: "إثيوبي أرابيكا",
    price: 390,
    category: "تحميص فاتح",
    image:
      "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/619351441_122246647382174179_5238793381680216920_n.jpg?stp=c0.88.938.938a_dst-jpg_tt6&cstp=mx938x938&ctp=s206x206&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=i_9Ob6xkrHEQ7kNvwGlddYM&_nc_oc=Ado8qym7mlTYbDKiMjSHH-N2FN9grwmsEHnL1Z9Y5n2lRnOs4uz8zsJzQ6y3mxpSRwg&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=_YZzXquIqYBb4dHINqdS7g&_nc_ss=732a8&oh=00_AQJ_7-UoCxnPR-gnGCF7W-JXtj_0JJNUkMTlr--7l3SdUQ&oe=6ABD7C3B",
    description:
      "نكهة فاكهية خفيفة مع رائحة واضحة ومميزة.",
  },
  {
    id: 3,
    name: "كولومبي",
    price: 350,
    category: "تحميص متوسط",
    image:
      "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/617903462_122246647016174179_3051893926034618369_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s206x206&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=fNOH2W0IetsQ7kNvwEATYWM&_nc_oc=AdogQTNnbGEIiny7ElRrBPCMivjzwmr_Uot7Dq2gwl4L--t8GXfrS59jHldWY97p-uo&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=RrlZzYR4jYKp7aQ7O8zbsg&_nc_ss=732a8&oh=00_AQKkFX69n99uNSesJwccoBteb6cW4S1Dtg49xGhlAFr8Ag&oe=6ABD9A96",
    description:
      "قهوة متوازنة بطعم الكراميل ولمسة خفيفة من الكاكاو.",
  },
  {
    id: 4,
    name: "إسبريسو دارك",
    price: 340,
    category: "تحميص غامق",
    image:
      "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/605533446_122242793816174179_9036514219873732872_n.jpg?stp=c0.106.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=cx26EXtnynsQ7kNvwE5lVGQ&_nc_oc=Adq1IwQZ8G8H7UBm1j3t6213d2M4Jx_O17Og7nYXl8VaABcdTwydjyVCPW11nkvppHo&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=wZsvf9xEwSiVSgMGCERpaQ&_nc_ss=732a8&oh=00_AQIbBahm40eFPcg4TWgCY1Ky8KS_QwfA24CRQ-aHhQ0RUw&oe=6ABD82F4",
    description:
      "تحميص غامق لمحبي الإسبريسو القوي والطعم الواضح.",
  },
  {
    id: 5,
    name: "TORKY Blend",
    price: 300,
    category: "تحميص متوسط",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    description:
      "خلطة متوازنة مناسبة للقهوة اليومية بطعم سلس.",
  },
  {
    id: 6,
    name: "فرنش روست",
    price: 370,
    category: "تحميص غامق",
    image:
      "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/599694952_122241524558174179_7546666347884321809_n.jpg?stp=c0.106.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=45sq5VSBktkQ7kNvwFnC_aa&_nc_oc=Ado0xP0f-Mznrfc1uitAuOpdgdcPQku9cCNqwNg7_TXUCUNopdFwpnc2I1aBipiPCnY&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=k_poY2-a_MeAprqh0EuhLA&_nc_ss=732a8&oh=00_AQIuxP8MDhEcXF666pXcnvIxHZomasIiH_2PNtY7LEP_qQ&oe=6ABD9E87",
    description:
      "قهوة قوية بتحميص غامق ونكهة عميقة لمحبي الطعم الثقيل.",
  },
];

export default products;