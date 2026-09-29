// Public meal options. Addresses below identify restaurants only; the accommodation remains approximate.
const mealPlan = [
  {
    day: 'FRI 2', title: 'Arrival night', intro: 'Choose one dinner table; no one needs to queue with luggage. All directions start at public Guting Station.', slots: [
      {label: 'Dinner', area: 'Dongmen / Da’an', from: 'Guting Station, Taipei', options: [
        {name: 'Kao-Chi Xinsheng', type: 'Shanghai-Taiwanese dim sum', fit: 'Book one table', note: 'Best nearby nine-person fit. The restaurant advertises a ten-person set; ask them to serve nine and confirm the minimum spend. Fried pork buns and shared dishes.', venue: 'https://www.kao-chi.com/en/branch-xinsheng', phone: '+886223257639', destination: 'Kao Chi Xinsheng Taipei'},
        {name: 'Shin Yeh Zhongxiao', type: 'Classic Taiwanese banquet dishes', fit: 'Reserve nine', note: 'A reliable seated fallback with 165 seats and private rooms. Reserve one table or adjacent tables before the flight.', venue: 'https://www.shinyeh.com.tw/content/en/brand/Store.aspx?BrandId=1&Id=4', book: 'https://www.tablecheck.com/zh-TW/shin-yeh-zhongxiao-store/reserve/landing', phone: '+886227529299', destination: 'Shin Yeh Zhongxiao Taipei'},
        {name: 'Dongmen Dumplings', type: 'Dumplings and sour-cabbage hotpot', fit: 'Call for nine', note: 'A lively, long-running local room near Dongmen with over 100 seats; Friday dinner service ends around 21:00. Ask for one table.', venue: 'https://dongmen.com.tw/', phone: '+886223411685', destination: 'Dongmen Dumpling House Taipei'},
        {name: 'Din Tai Fung Xinsheng', type: 'Xiao long bao', fit: 'Queue / split', note: 'Mr K’s original pick. Only take this route if the live queue is manageable; the original Xinyi Road shop is takeaway only.', venue: 'https://www.dintaifung.com.tw/store.php', destination: 'Din Tai Fung Xinsheng Branch Taipei'}
      ]}
    ]
  },
  {
    day: 'SAT 3', title: 'City tasting day', intro: 'Breakfast near Guting or Fu Hang, lunch by the memorial, dinner beside Raohe. The nine can split for street food and regroup at the station.', slots: [
      {label: 'Breakfast', area: 'Guting → Huashan', from: 'Guting Station, Taipei', options: [
        {name: 'Fu Hang Soy Milk', type: 'Taiwanese breakfast', fit: 'Queue / split', note: 'Mr K and Mr S pick. Go early for thick bread, egg and soy milk; nine together is unlikely at peak time.', venue: 'https://www.travel.taipei/en/pictorial/article/48481', destination: 'Fu Hang Soy Milk Taipei'},
        {name: 'The Bread · Guting', type: 'Bakery pickup', fit: 'Easy for nine', note: 'Local bakery near the base, listed from 07:00. Grab savory bread and coffee before the city route; no group table needed.', venue: 'https://page.line.me/wqo1706i', destination: '布列德麵包 古亭店', mode: 'walking'},
        {name: 'Yellow Monday · Guting', type: 'Coffee and croffles', fit: 'Call / takeaway', note: 'Opens 09:00 on Saturday. A slower brunch option near Guting; confirm seating for nine or take away.', venue: 'https://yellowmonday.com.tw/', phone: '+886223676860', destination: 'Yellow Monday 古亭店 台北', mode: 'walking'}
      ]},
      {label: 'Lunch', area: 'Memorial Hall / Dongmen', from: 'Chiang Kai-shek Memorial Hall, Taipei', options: [
        {name: 'Chun Shui Tang · Memorial Hall', type: 'Taiwanese noodles, snacks and tea', fit: 'Call for nine', note: 'The closest seated option: inside National Concert Hall, Gate 2. Opens 11:30; request a group table by phone.', venue: 'https://www.chunshuitang.com.tw/en/location-detail/cks_memorial_hall_store/', phone: '+886223519554', destination: 'Chun Shui Tang CKS Memorial Hall Taipei', mode: 'walking'},
        {name: 'Kao-Chi Xinsheng', type: 'Dim sum and shared dishes', fit: 'Book one table', note: 'Its ten-person set is an easy option if Friday dinner went elsewhere. Short ride from the memorial.', venue: 'https://www.kao-chi.com/en/branch-xinsheng', phone: '+886223257639', destination: 'Kao Chi Xinsheng Taipei'},
        {name: 'Jin Feng Braised Pork Rice', type: 'Local rice bowls', fit: 'Quick / split', note: 'Right by CKS station, but it is a small, busy shop: take separate tables or takeaway and check same-day hours.', venue: 'https://www.google.com/maps/search/?api=1&query=Jin+Feng+Braised+Pork+Rice+Taipei', destination: 'Jin Feng Braised Pork Rice Taipei', mode: 'walking'}
      ]},
      {label: 'Dinner', area: 'Raohe / Songshan Station', from: 'Songshan Station, Taipei', options: [
        {name: 'Raohe Night Market', type: 'Taiwanese street-food crawl', fit: 'Split / regroup', note: 'Mr K and Mr S pick. Each person buys what they want; set a meeting point at Songshan MRT rather than trying to seat nine.', venue: 'https://eng.taiwan.net.tw/m1.aspx?id=r177&sNo=0002016', destination: 'Raohe Street Night Market Taipei', mode: 'walking'},
        {name: 'Tim Ho Wan · CITYLINK Songshan', type: 'Hong Kong dim sum', fit: 'Call for nine', note: 'Seated backup at Songshan Station next to the market. Ask for one table or two adjacent tables before heading over.', venue: 'https://www.citylink.tw/songshan/?cat=18', phone: '+886225287978', destination: 'Tim Ho Wan Citylink Songshan Taipei', mode: 'walking'},
        {name: 'Thai Town · CITYLINK Songshan', type: 'Thai sharing dishes', fit: 'Reserve nine', note: 'Another station-side table if the market is too wet or crowded. The mall lists online reservations and a direct branch phone.', venue: 'https://www.citylink.tw/songshan/?cat=18', phone: '+886225281080', destination: 'Thai Town Citylink Songshan Taipei', mode: 'walking'}
      ]}
    ]
  },
  {
    day: 'SUN 4', title: 'Mountain and massage', intro: 'Eat before the climb, decide lunch around the weather, then keep dinner close to Taihu Da’an.', slots: [
      {label: 'Breakfast', area: 'Guting / Da’an', from: 'Guting Station, Taipei', options: [
        {name: 'Yong He Soy Milk King', type: 'Taiwanese breakfast', fit: 'Quick / split', note: 'Mr K pick. Confirm the Fuxing South Road branch and current hours in Maps; order in smaller groups.', venue: 'https://www.google.com/maps/search/?api=1&query=Yong+He+Soy+Milk+King+Fuxing+South+Road+Taipei', destination: 'Yong He Soy Milk King Fuxing South Road Taipei'},
        {name: 'Kao-Chi Xinsheng', type: 'Weekend dim sum breakfast', fit: 'Call for nine', note: 'Opens at 08:30 on weekends and offers breakfast. A seated start if you can reserve all nine.', venue: 'https://www.kao-chi.com/en/branch-xinsheng', phone: '+886223257639', destination: 'Kao Chi Xinsheng Taipei'},
        {name: 'The Bread · Guting', type: 'Bakery pickup', fit: 'Easy for nine', note: 'Fastest option before the charter. Buy extra savory bread for the mountain if the forecast permits a stop.', venue: 'https://page.line.me/wqo1706i', destination: '布列德麵包 古亭店', mode: 'walking'}
      ]},
      {label: 'Lunch', area: 'Qingtiangang / museum fallback', from: 'Qingtiangang Visitor Center, Taipei', options: [
        {name: 'Jingyan Landscape Restaurant', type: 'Mountain shared dishes', fit: 'Call for nine', note: 'At Jingshan Recreation Area, a charter detour from Qingtiangang. Book the table and ask your driver to include the stop; lunch service ends early.', venue: 'https://www.star-fountain.com/restaurant/', phone: '+886228625116', destination: '菁艷景觀餐廳 陽明山', mode: 'driving'},
        {name: 'Bakery provisions', type: 'Light lunch on the move', fit: 'Easy for nine', note: 'Pick up bread, fruit and water in Guting. Eat at a suitable rest area or after leaving the trail; carry all rubbish out.', venue: 'https://page.line.me/wqo1706i', destination: '布列德麵包 古亭店', from: 'Guting Station, Taipei'},
        {name: 'Silks Palace · museum route', type: 'Chinese banquet lunch', fit: 'Reserve nine', note: 'Rain-day option beside National Palace Museum. It has 200 open seats and private rooms; Sunday lunch runs 11:00–15:00. Call for a nine-person table.', venue: 'https://www.silkspalace.com.tw/en/introduction-silks-palace', phone: '+886228829393', destination: 'Silks Palace National Palace Museum Taipei', from: 'National Palace Museum, Taipei', mode: 'walking'}
      ]},
      {label: 'Dinner', area: 'Da’an / Zhongxiao', from: 'Guting Station, Taipei', options: [
        {name: 'Taihu Da’an', type: 'Craft beer and pub food', fit: 'Reserve nine', note: 'Mr K’s Sunday anchor. Ask for a single table and confirm that the kitchen can serve dinner for all nine.', venue: 'https://www.taihubrewing.com/en/pages/taihu-retail', book: 'https://www.opentable.com.tw/restaurant/profile/181709', phone: '+886227735565', destination: 'Taihu Brewing Da’an Taipei'},
        {name: 'Shin Yeh Zhongxiao', type: 'Classic Taiwanese sharing dishes', fit: 'Reserve nine', note: 'The strongest nearby full-dinner fallback if Taihu is full. Last orders are earlier than the bar, so book a dinner time.', venue: 'https://www.shinyeh.com.tw/content/en/brand/Store.aspx?BrandId=1&Id=4', book: 'https://www.tablecheck.com/zh-TW/shin-yeh-zhongxiao-store/reserve/landing', phone: '+886227529299', destination: 'Shin Yeh Zhongxiao Taipei'},
        {name: 'Le Blanc', type: 'Steak and lobster splurge', fit: 'Book exactly nine', note: 'Online booking accepts up to nine. Expect a higher spend and a deposit for six or more; a short ride from Taihu.', venue: 'https://www.opentable.com.tw/r/le-blanc-taipei-city', book: 'https://www.opentable.com.tw/r/le-blanc-taipei-city', phone: '+886227007770', destination: 'Le Blanc Taipei'}
      ]}
    ]
  },
  {
    day: 'MON 5', title: 'Last morning', intro: 'Choose a fast breakfast and an early lunch that leave plenty of time to collect bags and reach the airport.', slots: [
      {label: 'Breakfast', area: 'Guting / Longshan Temple', from: 'Guting Station, Taipei', options: [
        {name: 'The Bread · Guting', type: 'Bakery pickup', fit: 'Easy for nine', note: 'Open from 07:00 according to its official account. The lowest-effort breakfast before packing and checkout.', venue: 'https://page.line.me/wqo1706i', destination: '布列德麵包 古亭店', mode: 'walking'},
        {name: 'Zhou Ji Meat Porridge', type: 'Wanhua pork congee', fit: 'Quick / split', note: 'Go here if the group starts at Longshan Temple. The temple’s own food guide lists it nearby from early morning; nine may need separate tables.', venue: 'https://www.lungshan.org.tw/tw/07_1_3_eat.php', destination: '周記肉粥店 台北', from: 'Longshan Temple, Taipei', mode: 'walking'}
      ]},
      {label: 'Early lunch', area: 'Wanhua → Guting return', from: 'Longshan Temple, Taipei', options: [
        {name: 'Zhou Ji Meat Porridge', type: 'Taiwanese congee and crispy pork', fit: 'Quick / split', note: 'A local meal just off the temple route. Eat early and leave before the airport transfer; confirm hours that morning.', venue: 'https://www.lungshan.org.tw/tw/07_1_3_eat.php', destination: '周記肉粥店 台北', mode: 'walking'},
        {name: 'Chun Shui Tang · Memorial Hall', type: 'Noodles and bubble tea', fit: 'Call for nine', note: 'Seated lunch on the way back toward Guting. Opens at 11:30; ask for a short, punctual group service.', venue: 'https://www.chunshuitang.com.tw/en/location-detail/cks_memorial_hall_store/', phone: '+886223519554', destination: 'Chun Shui Tang CKS Memorial Hall Taipei'},
        {name: 'Dongmen Dumplings', type: 'Dumplings and hotpot', fit: 'Call for nine', note: 'Close to the Guting return route and opens for weekday lunch. Confirm the table and keep a firm departure time.', venue: 'https://dongmen.com.tw/', phone: '+886223411685', destination: 'Dongmen Dumpling House Taipei'}
      ]}
    ]
  }
];
