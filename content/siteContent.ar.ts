export type JourneyAction = {
  label: string;
  type: "map" | "whatsapp" | "link" | "review";
  href: string;
};

export type JourneyNote = {
  title: string;
  text: string;
};

export type JourneyDetail = {
  label: string;
  text: string;
  mapHref?: string;
  mapLabel?: string;
  linkHref?: string;
  linkLabel?: string;
};

export type JourneyPhoto = {
  src: string;
  alt: string;
};

export type ExploreItem = {
  title: string;
  image: string;
  categories: string[];
  description: string;
  distance: string;
  visitTime: string;
  bestFor: string;
  tip: string;
  mapUrl: string;
};

export type JourneyItem = {
  slug: string;
  title: string;
  stage: string;
  summary: string;
  guestNote: JourneyNote;
  details: JourneyDetail[];
  photos?: JourneyPhoto[];
  exploreItems?: ExploreItem[];
  actions?: JourneyAction[];
};

const magdyWhatsapp = "https://wa.me/201001308835";
const reservationWhatsapp = "https://wa.me/201114161141";

export const appContent = {
  privateInfoTitle: "احفظ هذا الدليل",
  privateInfoText:
    "أضف Casa Sole إلى الشاشة الرئيسية لهاتفك للوصول السريع أثناء الإقامة، دون البحث عن الرابط مرة أخرى.",

  quickActions: [
    {
      icon: "🛬",
      label: "الوصول",
      detail: "المطار والتاكسي والدخول إلى المنتجع",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "تسجيل الدخول",
      detail: "الاستقبال والمفاتيح والتسجيل",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "استكشف",
      detail: "الأنشطة والطعام والمواصلات",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "دعم الإقامة والحجوزات",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "شقة مُدارة وليست خدمة فندقية",
      text: "لا تشمل الإقامة التنظيف اليومي أو إعادة التعبئة أو المستهلكات إلا إذا تم ترتيب ذلك بشكل منفصل.",
    },
    {
      title: "مصمم خصيصًا لـ Sharm Hills",
      text: "Casa Sole هي علامتنا للشقق السياحية المُدارة. Sharm Hills هو المنتجع الذي تقع فيه شقتك، لذلك تتولى Casa Sole دعم إقامتك بينما يوفر Sharm Hills بيئة المنتجع والمرافق المشتركة.",
    },
    {
      title: "تبقى التفاصيل الخاصة خارج الإنترنت",
      text: "تفاصيل Wi-Fi والمعلومات الخاصة بالشقة مطبوعة داخل الشقة وليست منشورة على الإنترنت.",
    },
  ],

  checkInPreview: [
    "اذهب إلى Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "عند البوابة، اسأل الأمن عن قاعة الاستقبال، ثم اسأل في الاستقبال عن فريقنا.",
    "سيساعدك فريقنا في الموقع بالمفاتيح وكارت دخول الشاطئ ومعلومات Wi-Fi والتسجيل.",
  ],

  supportPreview:
    "للدعم أثناء الإقامة تواصل مع فريقنا في الموقع. للتمديد أو تعديل الحجز أو الانتقالات تواصل مع مكتب الحجوزات.",

  contactPreview:
    "يدعم فريقنا في الموقع إقامتك. ويتولى مكتب الحجوزات التمديدات وBooking.com وأي أمور تخص المنصات الأخرى.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "الوصول",
    stage: "قبل الوصول إلى المنتجع",
    summary: "موقع Sharm Hills وإرشادات تاكسي المطار وخطوات الوصول عند البوابة.",
    guestNote: {
      title: "مرحبًا بكم في Casa Sole",
      text: "نتطلع إلى الترحيب بك في Casa Sole Sharm Hills. استخدم هذه الصفحة قبل السفر أو عند وصولك إلى Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "موقع المنتجع",
        text: "تقع Casa Sole داخل Sharm Hills Resort، Al Muntaza Gate 2، Sharm El Sheikh.",
      },
      {
        label: "من المطار",
        text: "يبعد Sharm El Sheikh International Airport حوالي 5 دقائق بالسيارة عن Sharm Hills Resort.",
      },
      {
        label: "تاكسي المطار",
        text: "قد تكون تاكسيات المطار أغلى، خصوصًا في الساعات المتأخرة. اتفق على السعر مع السائق قبل ركوب السيارة.",
      },
      {
        label: "أخبر السائق",
        text: "أخبر السائق بوضوح: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "عند البوابة الرئيسية",
        text: "أخبر الأمن أن لديك حجزًا مع Mr. Magdy. اطلب من الأمن توجيهك إلى قاعة الاستقبال.",
      },
      {
        label: "قاعة الاستقبال",
        text: "ادخل إلى المنتجع واذهب إلى قاعة الاستقبال واسأل مكتب الاستقبال عن Mr. Magdy.",
      },
      {
        label: "انتقال المطار",
        text: "يمكن لـ Casa Sole المساعدة في تنسيق الاستقبال من المطار أو التوصيل إليه مقابل USD 15 بسيارة عادية بحد أقصى 4 ضيوف. أي عدد إضافي من الضيوف أو مجموعات أكبر أو أمتعة إضافية يحتاج إلى تنسيق مسبق وقد يتطلب رسومًا إضافية. يرجى ترتيب ذلك مسبقًا مع مكتب الحجوزات.",
      },
    ],
    actions: [
      {
        label: "فتح خريطة المنتجع",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "تسجيل الدخول",
    title: "تسجيل الدخول",
    stage: "الدخول والاستقرار",
    summary: "وقت تسجيل الدخول ودعم المندوب والمفاتيح وكارت الشاطئ والتسجيل.",
    guestNote: {
      title: "وقت تسجيل الدخول",
      text: "تسجيل الدخول متاح من الساعة 2:00 ظهرًا حتى 11:00 مساءً. الوصول بعد 11:00 مساءً يجب تنسيقه مع Casa Sole قبل الوصول.",
    },
    details: [
      {
        label: "تسجيل دخول مبكر",
        text: "قد يكون تسجيل الدخول المبكر ممكنًا حسب التوافر. يجب تنسيقه مسبقًا وليس في نفس اللحظة.",
      },
      {
        label: "مقابلة فريقنا",
        text: "عند وصولك إلى قاعة الاستقبال، اسأل عن فريقنا. سيساعدونك في إجراءات تسجيل الدخول.",
      },
      {
        label: "ما يقدمه فريقنا",
        text: "سيقدم فريقنا مفاتيح الشقة وكارت دخول الشاطئ ومعلومات Wi-Fi.",
      },
      {
        label: "تسجيل جوازات السفر",
        text: "وفقًا لمتطلبات الأمن الحكومية المحلية، يلزم تقديم نسخة من جواز السفر الأصلي لكل ضيف. قد يتم استلام الجوازات لفترة قصيرة حوالي 10 دقائق ثم إعادتها فورًا.",
      },
      {
        label: "تسجيل دخول ذاتي بديل",
        text: "إذا لم نتمكن من الوصول إلى مندوبنا فورًا أو حدث تأخير في تسجيل الدخول، يرجى مراسلة Casa Sole وسنفعّل إجراء تسجيل الدخول الذاتي البديل.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "دليل الشقة",
    stage: "داخل الشقة",
    summary: "Wi-Fi والتكييف وأدوات المطبخ والمناشف والأجهزة والغسالة والقمامة والمرافق.",
    guestNote: {
      title: "مهم: شقة مُدارة",
      text: "Casa Sole شقة سياحية مُدارة وليست خدمة فندقية. لا يشمل السعر التنظيف اليومي أو إعادة التعبئة أو المنظفات أو استبدال المستهلكات أثناء الإقامة إلا إذا تم ترتيبها بشكل منفصل مقابل رسوم إضافية.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "تفاصيل Wi-Fi مطبوعة خلف الباب الرئيسي للشقة. الاتصال مناسب للتصفح والاستخدام الأساسي، لكنه غير مضمون للبث أو الاستخدام الثقيل.",
      },
      {
        label: "خيار راوتر 5G",
        text: "إذا كنت تحتاج إنترنت أقوى، قد توفر Casa Sole راوتر 5G بباقة محدودة مقابل رسوم إضافية حسب التوافر. يرجى سؤال فريقنا.",
      },
      {
        label: "استخدام التكييف",
        text: "يرجى إغلاق أبواب البلكونة أو التراس أثناء تشغيل التكييف، وإطفاء التكييف والأنوار عند مغادرة الشقة.",
      },
      {
        label: "المناشف",
        text: "تحتوي الشقة على مناشف للاستحمام ومناشف للوجه ومناشف للشاطئ. مناشف الحمام مخصصة لاستخدام الحمام فقط. يرجى عدم استخدامها للأقدام أو الأرضيات أو الشاطئ أو الأماكن الخارجية.",
      },
      {
        label: "المطبخ",
        text: "يحتوي المطبخ على أطباق وأكواب وغلاية مياه ساخنة وميكروويف وموقد وثلاجة. لا يوجد فرن. يرجى الحفاظ على نظافة المطبخ أثناء الإقامة.",
      },
      {
        label: "محتويات الشقة",
        text: "تحتوي الشقة على مكواة ومجفف شعر ومنشر ملابس وغلاية مياه ومناشف للشاطئ ومناشف للوجه ومناشف للاستحمام.",
      },
      {
        label: "الغسالة",
        text: "توجد غسالة في الشقة. المنظفات غير متوفرة.",
      },
      {
        label: "القمامة",
        text: "سلة القمامة تحت الحوض. عند امتلائها، يرجى نقل القمامة إلى أقرب صندوق تجميع رئيسي في منطقة اللاندسكيب.",
      },
      {
        label: "انقطاع المياه أو الكهرباء",
        text: "المياه والكهرباء خدمات مدفوعة في المنطقة. في حالات نادرة قد يحدث انقطاع قصير. هذا طبيعي. راسل فريقنا وعادةً تعود الخدمة خلال حوالي 5 دقائق.",
      },
      {
        label: "مشكلة في الشقة",
        text: "لأعمال الصيانة أو أي مشكلة في الشقة، يرجى التواصل مع فريقنا.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "قواعد الإقامة",
    stage: "أثناء الإقامة",
    summary: "ساعات الهدوء والزوار والتدخين والحيوانات والتلف والعناية بالشقة.",
    guestNote: {
      title: "يرجى احترام الشقة",
      text: "الشقة مُدارة بشكل خاص. يرجى التعامل معها بعناية واحترام الجيران وضيوف المنتجع والمساحات المشتركة.",
    },
    details: [
      {
        label: "ساعات الهدوء",
        text: "ساعات الهدوء من 10:00 مساءً إلى 8:00 صباحًا. يرجى خفض الصوت خلال هذه الفترة.",
      },
      {
        label: "الزوار",
        text: "يسمح بالزوار فقط بعد التسجيل عند بوابة/أمن المنتجع. لا يجب أن يدخل أي زائر غير مسجل إلى المنتجع أو الشقة.",
      },
      {
        label: "التدخين",
        text: "التدخين غير مسموح داخل الشقة. التدخين مسموح فقط بالخارج في البلكونة أو التراس.",
      },
      {
        label: "الحيوانات الأليفة",
        text: "يجب تنسيق الحيوانات الأليفة مع مكتب الحجوزات قبل الوصول. غير مسموح بدخول الحيوانات إلى حمام السباحة ويجب أن تبقى مقيدة أثناء الإقامة.",
      },
      {
        label: "الأطفال",
        text: "يجب مراقبة الأطفال في جميع الأوقات. يتحمل الوالدان أو الأوصياء المسؤولية الكاملة عن سلامة الأطفال.",
      },
      {
        label: "الأثاث",
        text: "يرجى عدم إخراج الأثاث الداخلي إلى البلكونة أو التراس أو الحديقة أو حمام السباحة أو الشاطئ.",
      },
      {
        label: "التلف أو الكسر",
        text: "قد تحدث الحوادث. يرجى إبلاغ فريقنا فورًا عن أي تلف أو كسر.",
      },
      {
        label: "فقدان المفتاح أو الكارت",
        text: "تكلفة استبدال المفتاح المفقود أو كارت الشاطئ المفقود هي USD 100 وتُدفع مباشرة لفريقنا.",
      },
      {
        label: "ملاحظة الناموس للدور الأرضي",
        text: "إذا كنت تقيم في الدور الأرضي، يرجى إبقاء باب الشبك مغلقًا للمساعدة في تجنب الناموس.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "دليل المنتجع",
    stage: "الاستمتاع بـ Sharm Hills",
    summary: "حمامات السباحة وموقف السيارات ومرافق المنتجع وتوصيل السوبر ماركت والمناطق المشتركة.",
    guestNote: {
      title: "إرشادات Sharm Hills",
      text: "تغطي هذه الصفحة معلومات المنتجع المشتركة لضيوف Casa Sole المقيمين داخل Sharm Hills.",
    },
    details: [
      {
        label: "حمام السباحة",
        text: "حمام السباحة في المنتجع مفتوح من شروق الشمس إلى غروبها. يجب مراقبة الأطفال في جميع الأوقات.",
      },
      {
        label: "حمام سباحة للأطفال وألعاب مائية",
        text: "يوجد في Sharm Hills حمام سباحة للأطفال ومنطقة ألعاب مائية صغيرة للأطفال مع زحاليق. يجب أن يراقب الوالد أو الوصي الأطفال في جميع الأوقات؛ Casa Sole والمنتجع لا يحلان محل إشراف الوالدين.",
      },
      {
        label: "موقف السيارات",
        text: "موقف السيارات مجاني داخل Sharm Hills.",
      },
      {
        label: "المناطق المشتركة",
        text: "يرجى احترام المساحة الشخصية وراحة الضيوف الآخرين في جميع مناطق المنتجع المشتركة.",
      },
      {
        label: "مطعم وكافيه",
        text: "يوجد مطعم/كافيه داخل Sharm Hills.",
      },
      {
        label: "توصيل السوبر ماركت",
        text: "يوجد سوبر ماركت/محل مع خدمة توصيل. عند الطلب، اذكر رقم الشقة ورقم المبنى من المعلومات المطبوعة خلف الباب الرئيسي.",
      },
      {
        label: "الحيوانات داخل المنتجع",
        text: "يجب أن تبقى الحيوانات مقيدة أثناء الإقامة وغير مسموح بدخولها إلى حمام السباحة.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "دليل الشاطئ",
    stage: "أيام الشاطئ",
    summary: "دخول مجاني إلى Sinbad Beach وقواعد الكارت والمرافق والمواصلات والمدفوعات على الشاطئ.",
    guestNote: {
      title: "دخول مجاني للشاطئ",
      text: "يحصل ضيوف Casa Sole على دخول مجاني إلى Sinbad Beach باستخدام كارت الشاطئ المتوفر للشقة. يرجى إحضار الكارت وإظهاره عند الوصول.",
    },
    details: [
      {
        label: "الوصول إلى الشاطئ",
        text: "يبعد Sinbad Beach حوالي 20 دقيقة سيرًا من Sharm Hills أو حوالي 5 دقائق بالسيارة. يمكنك استخدام الخريطة أو طلب مساعدتنا في تنسيق توصيلة مدفوعة.",
      },
      {
        label: "دخول الشاطئ",
        text: "دخول الشاطئ مجاني للضيوف المشمولين بكارت الشاطئ الخاص بالشقة. عند الوصول، أظهر كارت الشاطئ وقل إنك مقيم في Sharm Hills.",
      },
      {
        label: "مرافق الشاطئ",
        text: "يوجد في Sinbad Beach حمامات وكافيه ودش ومركز غوص ومارينا للسنوركلينج ومطعم.",
      },
      {
        label: "عدد الضيوف المغطى بالكارت",
        text: "يعتمد عدد الضيوف المشمولين بالدخول المجاني للشاطئ على حجم الشقة. وحدات غرفة النوم الواحدة عادةً تشمل كارتًا واحدًا لعدد 2 ضيوف. وحدات غرفتي النوم عادةً تشمل كارتين لعدد 4 ضيوف.",
      },
      {
        label: "كراسي الشاطئ والمناشف",
        text: "كراسي الشاطئ مجانية للضيوف المشمولين بالكارت. مناشف الشاطئ متوفرة داخل الشقة. أي إضافات أو ضيوف إضافيون يتحمل الضيف ترتيبهم.",
      },
      {
        label: "الطعام والمشروبات",
        text: "أي طلبات من مطعم الشاطئ تُدفع مباشرة من الضيف في المكان.",
      },
      {
        label: "طريقة الوصول",
        text: "يمكنك المشي إلى الشاطئ باستخدام الخريطة، أو طلب توصيل وعودة مدفوعين.",
      },
      {
        label: "كارت مفقود",
        text: "تكلفة استبدال كارت الشاطئ المفقود هي USD 100 وتُدفع مباشرة لفريقنا.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "صورة من Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "صورة من Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "فتح خريطة Sinbad Beach",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "اطلب منا توصيلة",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "استكشف Sharm",
    stage: "الأنشطة والمعالم",
    summary: "أفضل ما يمكن القيام به في Sharm El Sheikh، من رحلات البحر إلى السهرات.",
    guestNote: {
      title: "استكشف Sharm مع Casa Sole",
      text: "تشتهر Sharm El Sheikh بالسنوركلينج والغوص والـ نوادي الشاطئ ورحلات الصحراء وOld Market وSOHO Square والسهرات الهادئة. Casa Sole لا تدير الرحلات مباشرة، لكن يمكننا مساعدتك في فهم الخيارات وترتيب المواصلات عند الحاجة.",
    },
    details: [
      {
        label: "كيفية استخدام هذا الدليل",
        text: "استخدم البطاقات أدناه لمقارنة المسافة ووقت الزيارة المتوقع ومدى الملاءمة قبل اختيار المكان.",
      },
      {
        label: "حجز الأنشطة",
        text: "Casa Sole لا تنظم الرحلات مباشرة. بالنسبة للرحلات أو الأنشطة، أكد بوضوح وقت الاستلام وما هو مشمول والسعر قبل الحجز.",
      },
      {
        label: "تحتاج مساعدة في الاختيار؟",
        text: "إذا لم تكن متأكدًا مما يناسب مجموعتك، اسألنا وسنساعدك على الاختيار.",
      },
      {
        label: "نصيحة الطعام والمياه",
        text: "لا تشرب مياه الصنبور. بالنسبة للفواكه أو الطعام المغسول بمياه الصنبور، استخدم مياه زجاجات للشطف مرة إضافية عند الإمكان.",
      },
      {
        label: "الحماية من الشمس",
        text: "شمس البحر الأحمر قوية. أحضر واقي شمس ونظارة شمس وقبعة، خاصة في أيام الشاطئ والقوارب والصحراء.",
      },
      {
        label: "الإكراميات والأسعار",
        text: "الإكراميات شائعة في المناطق السياحية. في الأسواق ومحلات الهدايا، لا تخجل من التفاوض بأدب؛ الفصال جزء من التجربة.",
      },
      {
        label: "زيارات الصحراء والمساجد",
        text: "ارتدِ بنطالًا طويلًا عند ركوب الجمال. قد ترغب السيدات في إحضار إيشارب لتغطية الشعر في الصحراء وعند زيارة المساجد.",
      },
      {
        label: "خطط الغوص",
        text: "خطط للغوص مسبقًا، خاصة إذا كنت تحتاج مركزًا مرخصًا أو معدات أو تدريب مبتدئين أو متطلبات شهادة.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["مساء", "عائلات", "مطاعم"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 8-10 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["ثقافة", "تسوق", "مساء"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 25-30 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار المتعلق بـ Al Sahaba Mosque مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["ثقافة", "معلم", "صور"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 25-30 دقيقة بالسيارة من Sharm Hills",
        visitTime: "30–60 دقيقة",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["سهر", "كافيهات", "تمشية"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "2–4 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["سهر", "كافيه", "غروب"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 30-35 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["بحر وشاطئ", "طبيعة", "رحلة يومية"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 45-60 دقيقة بالسيارة من Sharm Hills",
        visitTime: "6–8 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["بحر وشاطئ", "رحلة بحرية", "سنوركلينج"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "تختلف نقطة الاستلام حسب منظم الرحلة",
        visitTime: "6–8 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["بحر وشاطئ", "مغامرة", "غوص"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "يختلف الاستلام حسب مركز الغوص أو موقع الشاطئ",
        visitTime: "3–7 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["مغامرة", "صحراء", "عائلات"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "يختلف الاستلام حسب منظم الرحلة",
        visitTime: "3–5 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["ثقافة", "داخلي", "عائلات"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 15-20 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1–2 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["ثقافة", "معلم", "هادئ"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 20-25 دقيقة بالسيارة من Sharm Hills",
        visitTime: "30–60 دقيقة",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["بحر وشاطئ", "سنوركلينج", "نوادي شاطئية"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 10-30 دقيقة بالسيارة حسب المكان",
        visitTime: "3–5 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["رحلة يومية", "مغامرة", "بحر وشاطئ"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 1.5-2 ساعات بالسيارة من Sharm Hills",
        visitTime: "يوم كامل",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["رحلة يومية", "ثقافة", "مغامرة"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 3+ ساعات بالسيارة من Sharm Hills",
        visitTime: "مع مبيت أو يوم كامل",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["مساء", "عائلات", "صور"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 15-20 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1–2 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["بحر وشاطئ", "سنوركلينج", "غوص"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 45-60 دقيقة بالسيارة, عادة تتم زيارته بالقارب أو ضمن رحلة منظمة إلى Ras Mohammed",
        visitTime: "يوم كامل مع منظم قارب أو غوص",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "فتح خريطة Sharm",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "اسأل Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "مطاعم",
    stage: "تناول الطعام خارجًا",
    summary: "اختيارات Casa Sole للطعام حول Sharm، من المأكولات البحرية والبرجر إلى الإيطالي والمشويات المصرية والمخابز.",
    guestNote: {
      title: "دليل الطعام للضيوف",
      text: "Casa Sole لا توفر الطعام أو البقالة أو خدمة التوصيل. هذه أماكن مقترحة لمساعدة الضيوف على الاختيار؛ يرجى التواصل مع المطاعم مباشرة للحجز والتوصيل ومواعيد العمل والدفع.",
    },
    details: [
      {
        label: "قبل الذهاب",
        text: "قد تتغير مواعيد المطاعم والقوائم والأسعار وتوفر التوصيل. يرجى التحقق مباشرة قبل الذهاب أو الطلب.",
      },
      {
        label: "المواصلات",
        text: "يقوم الضيوف بترتيب التاكسي أو التوصيلة بأنفسهم. يمكن لـ Casa Sole المساعدة بإرشادات عامة، لكن فاتورة المطعم ورسوم التوصيل والمواصلات يدفعها الضيف مباشرة.",
      },
      {
        label: "سلامة الطعام",
        text: "بالنسبة للمأكولات البحرية أو الطعام النيء أو الحساسية، اسأل المطعم بوضوح قبل الطلب. العائلات التي لديها أطفال يُفضل أن تختار أطباقًا بسيطة عند عدم التأكد.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["مأكولات بحرية", "Old Market", "عائلات"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 25-30 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–2.5 ساعات",
        bestFor: "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار المتعلق بـ Al Sahaba Mosque مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["برجر", "أمريكي", "عائلات"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 12-18 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1–2 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["إيطالي", "بيتزا", "كاجوال"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 15-25 دقيقة بالسيارة من Sharm Hills, حسب المرور",
        visitTime: "1–2 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["مأكولات بحرية", "ستيك", "فاخر"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 12-18 دقيقة بالسيارة من Sharm Hills",
        visitTime: "2–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["هندي", "آسيوي", "فاخر"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Naama Bay مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "2–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["مصري", "مشويات", "عائلات"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Naama Bay مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–2.5 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["مأكولات بحرية", "ستيك", "Naama Bay"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Naama Bay مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–2.5 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["إيطالي", "بيتزا", "Naama Bay"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1–2 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["عالمي", "روف توب", "سهر"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Naama Bay مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–3 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["لبناني", "شرق أوسطي", "Naama Bay"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Naama Bay مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 18-22 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–2.5 ساعات",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["مصري", "مشويات", "Old Market"],
        description:
          "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 25-30 دقيقة بالسيارة من Sharm Hills",
        visitTime: "1.5–2 ساعات",
        bestFor: "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار المتعلق بـ Old Market مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["مخبز", "كافيه", "إفطار"],
        description:
          "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        distance: "حوالي 20-30 دقيقة بالسيارة من Sharm Hills",
        visitTime: "30–90 دقيقة",
        bestFor: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        tip: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "الخدمات القريبة منك",
    stage: "الاحتياجات اليومية القريبة",
    summary: "سوق وصيدلية ومغسلة وATM وجيم وبازار وخدمات مفيدة قريبة.",
    guestNote: {
      title: "ادفع لمقدمي الخدمات مباشرة",
      text: "Casa Sole لا توفر بقالة أو طعامًا أو غسيلًا أو خدمة توصيل. يرجى التواصل مع كل مقدم خدمة مباشرة والدفع له مباشرة.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "بقالة واحتياجات يومية. هاتف: +20 120 025 2250. قد تقدم بعض الأماكن توصيلًا مجانيًا؛ يرجى السؤال مباشرة أثناء الاتصال.",
        mapLabel: "فتح خريطة Safeway Market",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. هاتف: +20 107 095 3116.",
        mapLabel: "فتح خريطة pharmacy",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "غسيل وتنظيف جاف. هاتف: +20 128 732 4868.",
        mapLabel: "فتح خريطة City Dry Clean",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "يتوفر ATM عند السوبر ماركت.",
        mapLabel: "فتح خريطة ATM area",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "محل عصائر وفاكهة. هاتف: +20 100 938 3801.",
        mapLabel: "فتح خريطة Mango Juice",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "جيم قريب. هاتف: +20 104 041 2617.",
        mapLabel: "فتح خريطة Primal Fit Gym",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "بازار وتسوق. هاتف: +20 127 755 5334.",
        mapLabel: "فتح خريطة Delilah Bazar",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "ماركت ومول تجاري. هاتف: +20 100 048 9214.",
        mapLabel: "فتح خريطة Mango Market",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "المواصلات",
    stage: "التنقل",
    summary: "انتقال المطار والتاكسي والمواصلات العامة والتوصيلات المحلية المدفوعة.",
    guestNote: {
      title: "خطط قبل التنقل",
      text: "يمكن تنسيق الاستقبال من المطار أو التوصيل إليه مع Casa Sole مقابل USD 15 بسيارة عادية بحد أقصى 4 ضيوف. أي ضيوف إضافيين أو مجموعات أكبر أو أمتعة إضافية يحتاجون إلى تنسيق مسبق وقد يتطلب ذلك رسومًا إضافية. يرجى الترتيب مسبقًا مع مكتب الحجوزات.",
    },
    details: [
      {
        label: "من المطار إلى Sharm Hills",
        text: "تستغرق الرحلة من Sharm El Sheikh International Airport إلى Sharm Hills Resort حوالي 5 دقائق بالسيارة.",
      },
      {
        label: "تاكسي المطار",
        text: "قد تختلف تكلفة تاكسي المطار وقد تكون أعلى في الساعات المتأخرة. اتفق دائمًا على السعر قبل ركوب السيارة.",
      },
      {
        label: "انتقال Casa Sole",
        text: "يمكن لـ Casa Sole المساعدة في تنسيق الاستقبال من المطار أو التوصيل إليه مقابل USD 15 بسيارة عادية بحد أقصى 4 ضيوف، بشرط التنسيق المسبق. أي ضيوف إضافيين أو مجموعات أكبر أو أمتعة إضافية تحتاج إلى تنسيق منفصل وقد تتطلب رسومًا إضافية.",
      },
      {
        label: "المواصلات داخل المدينة",
        text: "يمكنك تنسيق المواصلات داخل المدينة مع Casa Sole مقابل رسوم إضافية.",
      },
      {
        label: "تاكسي عام",
        text: "التاكسي العام متوفر، لكن الأسعار قد تكون أعلى.",
      },
      {
        label: "المواصلات العامة",
        text: "المواصلات العامة متاحة على مسافة مشي من بوابة المنتجع.",
      },
    ],
    actions: [
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "الأسئلة الشائعة",
    stage: "أسئلة شائعة",
    summary: "إجابات سريعة عن Wi-Fi والتنظيف والزوار وcheckout وكارت الشاطئ والدعم.",
    guestNote: {
      title: "إجابات سريعة",
      text: "هذه أكثر أسئلة ضيوف Casa Sole شيوعًا. لأي أمر عاجل أثناء الإقامة، راسل فريقنا.",
    },
    details: [
      {
        label: "أين تفاصيل Wi-Fi؟",
        text: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
      },
      {
        label: "هل يمكن استخدام Wi-Fi للبث؟",
        text: "Wi-Fi مناسب للتصفح والاستخدام الأساسي. الاستخدام الثقيل أو البث غير مضمون. قد يتوفر راوتر 5G بباقة محدودة مقابل رسوم إضافية من خلال فريقنا.",
      },
      {
        label: "هل التنظيف مشمول؟",
        text: "التنظيف اليومي غير مشمول. نظافة الشقة أثناء الإقامة مسؤولية الضيف. يمكن ترتيب تنظيف مقابل رسوم إضافية حسب التوافر.",
      },
      {
        label: "هل توجد إعادة تعبئة؟",
        text: "لا. لا يتم توفير إعادة تعبئة أو مستهلكات أثناء الإقامة.",
      },
      {
        label: "هل يمكنني تمديد الإقامة؟",
        text: "يرجى التواصل مع مكتب الحجوزات للتمديد أو تعديل الحجز أو تسجيل دخول مبكر أو تسجيل الخروج متأخر.",
      },
      {
        label: "هل يمكنني إحضار زوار؟",
        text: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
      },
      {
        label: "ماذا لو فقدت المفتاح أو كارت الشاطئ؟",
        text: "قد يكون هذا الخيار مناسبًا أثناء إقامتك. يرجى التحقق من المواعيد والسعر والتوافر قبل الذهاب.",
      },
      {
        label: "ماذا لو انقطعت المياه أو الكهرباء؟",
        text: "قد يحدث هذا نادرًا لأن المياه والكهرباء خدمات مدفوعة في المنطقة. راسل فريقنا وعادةً تعود الخدمة خلال حوالي 5 دقائق.",
      },
      {
        label: "من أتواصل معه؟",
        text: "تواصل مع فريقنا لدعم الإقامة. تواصل مع مكتب الحجوزات للحجز أو التمديد أو انتقال المطار أو أمور Booking.com.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "تسجيل الخروج",
    title: "تسجيل الخروج",
    stage: "مغادرة الشقة",
    summary: "وقت تسجيل الخروج وقائمة الشقة والمفاتيح وكارت الشاطئ والفحص والتقييم.",
    guestNote: {
      title: "Checkout time",
      text: "وقت تسجيل الخروج الرسمي هو 12:00 ظهرًا كحد أقصى. قد يتوفر تسجيل الخروج متأخر حسب التوافر ويجب تنسيقه مسبقًا.",
    },
    details: [
      {
        label: "قبل المغادرة",
        text: "يرجى إخراج القمامة، وغسل الأطباق المستخدمة أو ترك المطبخ نظيفًا، وإطفاء التكييف والأنوار، وإغلاق النوافذ وأبواب البلكونة أو التراس، والتأكد من عدم ترك أي أغراض شخصية.",
      },
      {
        label: "المفاتيح وكارت الشاطئ",
        text: "أعد المفاتيح وكارت دخول الشاطئ إلى نفس المكان أو الشخص الذي استلمتها منه، بالتنسيق مع فريق Casa Sole.",
      },
      {
        label: "راسل قبل المغادرة",
        text: "يرجى مراسلة فريقنا قبل مغادرة الشقة.",
      },
      {
        label: "الفحص",
        text: "سيقوم فريقنا بفحص الشقة عند تسجيل الخروج. إذا كان هناك أي تلف أو كسر، يرجى الإبلاغ عنه قبل المغادرة.",
      },
      {
        label: "طلب تقييم",
        text: "إذا استمتعت بإقامتك، سنقدّر جدًا ترك تقييم على المنصة التي حجزت من خلالها. هذا يساعد الضيوف القادمين ويدعم Casa Sole.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "مغادرة المطار",
    stage: "مغادرة Sharm",
    summary: "توقيت المطار وتنسيق التوصيل وملاحظات الأمتعة ونصائح السفر النهائية.",
    guestNote: {
      title: "التوقيت الموصى به",
      text: "بالنسبة للرحلات، نوصي بمغادرة Sharm Hills قبل موعد الرحلة بساعتين ونصف إلى 3 ساعات. هذا هو الخيار الأكثر أمانًا لإجراءات المطار والمرور وتسجيل الدخول.",
    },
    details: [
      {
        label: "التوصيل إلى المطار",
        text: "يمكن لـ Casa Sole المساعدة في تنسيق التوصيل إلى المطار مقابل USD 15 بسيارة عادية وبحد أقصى 4 ضيوف، بشرط التنسيق المسبق. الضيوف الإضافيون أو المجموعات الأكبر أو الأمتعة الزائدة تحتاج إلى تنسيق منفصل وقد تتطلب رسومًا إضافية.",
      },
      {
        label: "قبل المغادرة",
        text: "تأكد من اكتمال تسجيل الخروج وإرجاع المفاتيح وكارت الشاطئ وعدم ترك أي أغراض شخصية.",
      },
      {
        label: "جوازات السفر والأمتعة",
        text: "قبل مغادرة الشقة، تحقق من جوازات السفر والهواتف والشواحن والأمتعة والمستندات الشخصية.",
      },
      {
        label: "خريطة المطار",
        text: "استخدم زر خريطة المطار إذا كنت تقود أو تستخدم تاكسي.",
      },
      {
        label: "حالة الرحلات المباشرة",
        text: "تحقق من حالة مغادرتك المباشرة من Sharm El Sheikh International Airport قبل مغادرة الشقة. قد تتغير مواعيد الرحلات أو التأخيرات أو الإلغاءات، لذلك أكد دائمًا مع شركة الطيران.",
        linkLabel: "مغادرات SSH المباشرة",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "فتح خريطة المطار",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "اطلب توصيلة",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "نادي الضيوف العائدين",
    stage: "بعد الإقامة",
    summary: "مزايا الضيوف العائدين وتسجيل بطاقة الخصم والتعليقات والشكاوى وطلب التقييم.",
    guestNote: {
      title: "سجّل أو أرسل تعليقًا أو شكوى",
      text: "املأ نموذج Returning Guest Club للحصول على بطاقة الخصم الخاصة بك. يمكنك أيضًا استخدام النموذج لإرسال تعليق أو شكوى بعد الإقامة حتى يتمكن فريقنا من المتابعة بشكل صحيح.",
    },
    details: [
      {
        label: "خصم الضيوف العائدين",
        text: "يمكن للضيوف العائدين الحصول على خصم 15% عند الحجز مع Casa Sole.",
      },
      {
        label: "خيارات الحجز",
        text: "يمكن للضيوف الحجز عبر Booking.com أو أي منصة أخرى إذا فضلوا ذلك. تتم إدارة مزايا Returning Guest Club من خلال Reservation Office.",
      },
      {
        label: "كيفية الانضمام",
        text: "افتح نموذج التسجيل وأضف الاسم والدولة ورقم WhatsApp والبريد الإلكتروني وأي تعليق أو شكوى إذا لزم الأمر. سيحتفظ فريقنا ببياناتك لعروض الضيوف العائدين والمتابعة عند الحاجة.",
      },
      {
        label: "تعليقات أو شكاوى",
        text: "يمكن استخدام نفس النموذج للتعليقات أو الشكاوى. يرجى كتابة المشكلة بوضوح حتى يتمكن فريقنا من مراجعتها والرد عبر القناة المناسبة.",
      },
      {
        label: "طلب تقييم",
        text: "إذا استمتعت بإقامتك، يرجى ترك تقييم على المنصة التي حجزت من خلالها. هذا يساعد الضيوف القادمين ويدعم Casa Sole.",
      },
    ],
    actions: [
      {
        label: "سجّل أو أرسل تعليقًا أو احصل على بطاقة الخصم",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "استكشف وحداتنا",
    stage: "شقق Casa Sole",
    summary: "افتح قوائم Casa Sole Sharm Hills وتحقق من الصور والتوافر والأسعار.",
    guestNote: {
      title: "تحقق من القوائم أونلاين",
      text: "استخدم هذه الصفحة لفتح قوائم وحدات Casa Sole ومشاهدة الصور ومقارنة حجم الشقق والتحقق من التوافر أو الأسعار المباشرة على Booking.com.",
    },
    details: [
      {
        label: "وحدة غرفة نوم واحدة: Casa Sole Sharm Hills Apt 1",
        text: "مناسبة للضيوف الذين يبحثون عن شقة Casa Sole بغرفة نوم واحدة في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "وحدة غرفة نوم واحدة: Casa Sole Sharm Hills Apt 2",
        text: "مناسبة للضيوف الذين يبحثون عن شقة Casa Sole بغرفة نوم واحدة في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "وحدة غرفة نوم واحدة: Casa Sole Sharm Hills Apt 3",
        text: "مناسبة للضيوف الذين يبحثون عن شقة Casa Sole بغرفة نوم واحدة في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "وحدة غرفة نوم واحدة: Casa Sole Sharm Hills Apt 4",
        text: "مناسبة للضيوف الذين يبحثون عن شقة Casa Sole بغرفة نوم واحدة في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "وحدة غرفتي نوم: Casa Sole Sharm Hills Apt 5",
        text: "مناسبة للعائلات أو المجموعات التي تفضل شقة Casa Sole بغرفتي نوم في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "وحدة ثلاث غرف نوم: Casa Sole Sharm Hills Apt 6",
        text: "مناسبة للعائلات الأكبر أو المجموعات التي تفضل شقة Casa Sole بثلاث غرف نوم في Sharm Hills.",
        linkLabel: "فتح على Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "تواصل معنا",
    stage: "الدعم",
    summary: "Mr. Magdy لدعم الإقامة، و Reservation Office لأمور الحجز.",
    guestNote: {
      title: "من تتواصل معه",
      text: "يرجى التواصل مع الفريق المناسب حتى نتمكن من مساعدتك بسرعة أكبر.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "لتسجيل الدخول ودعم الإقامة والمساعدة المحلية ومشاكل الشقة والصيانة والمفاتيح وبطاقة الشاطئ وطلبات راوتر 5G والدعم العاجل للشقة. الهاتف / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "مكتب الحجوزات",
        text: "لتغييرات الحجز والتمديدات وتسجيل الدخول المبكر وتسجيل الخروج المتأخر وتنسيق نقل المطار وReturning Guest Club وBooking.com وأمور المنصات الأخرى. الهاتف / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "عند الأمن",
        text: "عند الوصول إلى Sharm Hills، اذكر أن لديك حجزًا مع Mr. Magdy، ثم اطلب من الأمن توجيهك إلى قاعة الاستقبال.",
      },
    ],
    actions: [
      {
        label: "راسل فريقنا في الموقع عبر WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "مكتب الحجوزات",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
