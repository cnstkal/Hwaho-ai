const I={
back:'<path d="M15 5l-7 7 7 7"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',add:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',
gift:'<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M3 9h18v3H3zM12 9v11M12 9c-3 0-4-4-1.5-4S12 9 12 9zM12 9c3 0 4-4 1.5-4S12 9 12 9z"/>',
bell:'<path d="M6 17V11a6 6 0 0112 0v6l1.5 2h-15zM10 21h4"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/>',
home:'<path d="M4 11l8-7 8 7v8a1 1 0 01-1 1H5a1 1 0 01-1-1z" fill="currentColor"/>',req:'<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',box:'<rect x="4" y="4" width="16" height="5" rx="1"/><path d="M5 9v10h14V9M10 13h4"/>',
me:'<circle cx="12" cy="12" r="10" fill="#c9ccd1" stroke="none"/><circle cx="12" cy="10" r="3.5" fill="#fff" stroke="none"/><path d="M6 19c1-4 11-4 12 0" fill="#fff" stroke="none"/>',
heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',cmt:'<path d="M4 12a8 7 0 1114 5l3 3-5-1a8 7 0 01-12-7z"/>',
rep:'<path d="M17 3l3 3-3 3M4 11V9a3 3 0 013-3h13M7 21l-3-3 3-3M20 13v2a3 3 0 01-3 3H4"/>',book:'<path d="M6 3h12v18l-6-5-6 5z"/>',
share:'<path d="M12 15V3M7 8l5-5 5 5M5 12v8h14v-8"/>',more:'<circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3l2 2.5 3-.5 1 3 2.5 1.8-1 3 1 3-2.5 1.8-1 3-3-.5L12 21l-2-2.5-3 .5-1-3L3.5 14l1-3-1-3L6 6.2l1-3 3 .5z"/>',
list:'<path d="M9 6h11M9 12h11M9 18h11M4 6h.1M4 12h.1M4 18h.1"/>',chev:'<path d="M6 9l6 6 6-6"/>',x:'<circle cx="12" cy="12" r="10" fill="#8a8a8e" stroke="none"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff"/>',right:'<path d="M9 5l7 7-7 7"/>'};
const ic=(n,s=24,f)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${f?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const AU={a:{n:'달빛서점',c:'#7c8cf0',subs:1204},b:{n:'답개',c:'#9aa0a6',subs:579},c:{n:'미류',c:'#e08a6b',subs:332},d:{n:'새벽편지',c:'#4aa38f',subs:88},e:{n:'모래시계',c:'#b36bd6',subs:2150},u:{n:'유유',c:'#b8a0d9',subs:3}};
const P=[
{id:1,au:'b',t:'인어와 강아지 1',type:'장편',time:'3일 전',ch:'돌톤',ad:0,tags:['돌톤','인어','창작'],g:['#4facfe','#00c6a7'],cv:'인어와 강아지',views:363,pt:0,likes:53,rep:2,cm:4,kind:'post',
body:['아침 공기부터 확연히 다릅니다. 오늘은 그토록 고대하던 여행을 떠나는 날이니까요. 어쩌면 생을 통틀어 가장 특별한 순간 중 하나가 될지 모릅니다.','스무 살이 되는 해에 6일 간의 여행을 떠나는 건 우리의 오랜 전통입니다. 그래야만 진정한 어른이 된다느니 하는, 허세 가득한 어른들의 무용담을 줄곧 들어왔습니다.','우리은하 내에서 여행이 가능한 수 많은 행성 중 제가 고른 곳은 단연 지구별입니다. 인어별과 상당히 유사한 환경이라 처음 보는 풍경도 낯설지 않았습니다.','도착한 첫날, 해변에서 작은 강아지 한 마리가 제 지느러미를 물끄러미 바라보았습니다. 그게 모든 이야기의 시작이었습니다.']},
{id:2,au:'a',t:'비 오는 날의 서점',type:'단편',time:'2시간 전',ad:0,tags:['일상','서점','비'],g:['#355c7d','#c06c84'],cv:'비 오는 날의 서점',views:128,pt:500,likes:21,rep:1,cm:2,kind:'post',
body:['창밖으로 빗줄기가 굵어지자 손님 대신 우산 냄새가 먼저 들어왔다.','주인은 계산대 뒤에서 낡은 책등을 닦으며, 오늘도 아무도 사 가지 않을 책 한 권을 골라 맨 앞줄에 세웠다.','그 책이 팔리는 날이 오면 가게 문을 닫을 거라고, 오래전부터 혼잣말처럼 말해 왔다.']},
{id:3,au:'c',t:'여름밤 산책 일기',type:'에세이',time:'어제',ad:0,tags:['에세이','산책','여름'],g:['#f6d365','#fda085'],cv:'여름밤 산책',views:240,pt:0,likes:34,rep:3,cm:3,kind:'post',
body:['저녁 아홉 시, 신발끈을 묶고 동네를 한 바퀴 돈다. 아무 목적이 없는 걸음이 하루 중 가장 정직하다.','편의점 앞 평상에 앉은 사람들, 개를 데리고 나온 아이, 가로등 아래 모여든 날벌레들. 같은 길이어도 매일 다른 얼굴이다.']},
{id:4,au:'d',t:'다음에',type:'장편',time:'5일 전',ad:1,tags:['창작','여름','장마'],g:['#232526','#414345'],cv:'다음에',views:812,pt:800,likes:77,rep:5,cm:6,kind:'post',
body:['그런 날씨를 상상해 보라. 고온다습한 장마철. 해가 없어도 뚝뚝 흐르는 땀. 더운 숨이 뻗지 못하게 가로막는 묵직한 압력.','바깥을 거닐기만 해도 인성은 바닥을 치며 타인의 끈적한 팔꿈치에라도 스치면 짜증이 솟는다. 그런 계절에, 우리는 처음 마주 앉았다.']},
{id:5,au:'e',t:'수채화 입문 노트 #3',type:'시리즈',time:'6일 전',ad:0,tags:['그림','수채화','튜토리얼'],g:['#a8edea','#fed6e3'],cv:'수채화 입문 노트',views:1500,pt:1000,likes:120,rep:12,cm:8,kind:'series',
body:['물 조절이 전부라고 해도 과언이 아니에요. 붓에 물을 얼마나 머금게 하느냐에 따라 같은 색도 전혀 다른 표정이 됩니다.','오늘은 번짐을 활용한 하늘 그라데이션을 연습해 봅니다. 준비물은 300g 종이, 둥근 붓 8호, 그리고 인내심입니다.']},
{id:6,au:'a',t:'[리퀘스트] 표지 일러스트 구해요',type:'리퀘스트',time:'1주 전',ad:0,tags:['리퀘스트','일러스트','표지'],g:['#667eea','#764ba2'],cv:'표지 일러스트 의뢰',views:96,pt:0,likes:8,rep:0,cm:1,kind:'request',
body:['단편집 표지 일러스트를 맡아주실 분을 찾습니다. 분위기는 차분한 푸른 톤, 인물 없이 사물 위주를 원해요.']},
{id:7,au:'c',t:'달토끼 그림 모음',type:'채널',time:'2주 전',ad:0,tags:['채널','그림','달토끼'],g:['#ffecd2','#fcb69f'],cv:'달토끼 채널',views:410,pt:0,likes:45,rep:4,cm:2,kind:'channel',
body:['매일 한 장씩 올리는 달토끼 낙서 채널입니다. 구독하시면 새 그림 알림을 받을 수 있어요.']}];
// 유유 작가의 채널: 총 포스트 수는 127개지만 실제 화면에는 최신 10개만 표시
const UY=['#d8c5e7','#f2d8df','#b7c8e2','#e5d7c4','#c4d9d0','#d4c8ed','#e8d2bd','#b9ceda','#edd4df','#c7c9e8'];
const YUYU_PREVIEWS={
118:["박성화는 정윤호가 우산을 자기 쪽으로 기울인 걸 보고도 고맙다는 말 대신 “너 비 맞잖아” 하고 퉁명스럽게 말했다. 윤호는 어깨가 젖은 줄도 모르고 웃으며 우산을 더 기울였고, 성화는 그 얼굴을 보다가 결국 참지 못하고 한마디를 더 얹었다. “그러다 감기 걸리면 누가 책임져.” 윤호가 무슨 말을 더 하려는 듯 입술을 달싹이자 성화는 괜히 먼저 걸음을 옮겼다. 하지만 몇 걸음 가지도 못하고 뒤를 돌아본 건, 윤호가 따라오지 않는 것 같아서였다.",'윤호는 어깨가 젖은 것도 모른 채 웃으며 성화 쪽으로 우산을 더 기울였다.','“형은 꼭 걱정하는 말을 그렇게 해요?”','성화는 대답 대신 편의점에 들어가 윤호가 좋아하는 딸기우유를 집었다.'],
119:["윤호가 딸기우유를 받아 들고 눈을 반짝이자 성화는 괜히 진열대를 노려봤다. “그거 좋아한다고 한 적 없는데요?” “지난번에도 이거 골랐잖아.” 말하고 나서야 성화는 자기가 그 사소한 취향까지 기억하고 있었다는 걸 깨달았고, 윤호는 그 틈을 놓치지 않았다. 윤호가 “형 저 기억력 좋네요?” 하고 놀리자 성화는 아니라는 말을 하려다 그만뒀다. 괜히 부정하면 정말 신경 쓰고 있다는 사실만 더 티 날 것 같았기 때문이다.",'“그거 좋아한다고 한 적 없는데요?”','“지난번에도 이거 골랐잖아.” 말하고 나서 성화는 자기가 기억하고 있었다는 사실에 더 당황했다.','윤호는 장난스럽게 웃었고, 성화는 계산이 끝날 때까지 한마디도 하지 않았다.'],
120:["며칠째 윤호는 성화의 옆자리를 자연스럽게 차지하고 있었다. 성화는 좁다고 투덜대면서도 가방을 치워 자리를 만들어 줬다. “형, 저 여기 앉아도 돼요?” “이미 앉았잖아.” 윤호가 웃으며 어깨를 붙이자 성화는 휴대폰 화면만 만지작거리다가, 결국 슬쩍 자리를 더 내줬다. 윤호는 그 작은 배려를 눈치챈 듯 아무 말 없이 성화의 팔에 제 팔을 붙였다. 성화는 떨어지라고 말하려 했지만, 윤호가 먼저 웃는 바람에 타이밍을 놓치고 말았다.",'성화는 좁다고 투덜대면서도 가방을 치워 자리를 만들어 줬다.','“형, 저 여기 앉아도 돼요?”','“이미 앉았잖아.” 윤호가 웃자 성화는 괜히 휴대폰 화면만 몇 번이나 켰다 껐다.'],
121:["윤호가 다른 사람과 오래 이야기하는 모습을 보자 성화는 하루 종일 기분이 좋지 않았다. 왜 그런지 생각하기 싫어서 메시지에도 짧게 답했지만, 얼마 지나지 않아 윤호에게서 “제가 뭐 잘못했어요?”라는 문자가 왔다. 성화는 한참을 입력하다 지우기를 반복했고, 겨우 보낸 말은 고작 “아니. 밥은 먹었냐”였다. 윤호는 한참 뒤에야 “형 요즘 저 피하는 것 같아요”라고 덧붙였다. 성화는 아니라고 답하려 했지만, 자신이 왜 그런 기분을 느꼈는지 설명할 말부터 찾지 못했다.",'왜 그런지 생각하기 싫어서 괜히 윤호의 메시지에도 짧게 답했다.','그러자 윤호에게서 “제가 뭐 잘못했어요?”라는 문자가 왔다.','성화는 한참을 입력하다 지우고, 결국 “아니. 밥은 먹었냐”라고 보냈다.'],
122:["윤호는 성화가 화난 줄 알고 좋아하던 과자를 들고 찾아왔다. “이거 형도 좋아하잖아요. 화 풀어요.” “내가 언제 화냈다고.” 성화는 과자를 받아 들면서도 윤호의 얼굴을 제대로 보지 못했다. 윤호가 돌아간 뒤 봉지 뒷면에서 작은 메모를 발견한 순간, 성화는 괜히 혼자 웃을 뻔했다. 메모에는 삐뚤빼뚤한 글씨로 성화가 좋아하는 과자 이름까지 적혀 있었다. 성화는 그 종이를 버리려다가 결국 지갑 안쪽에 접어 넣었고, 다음 날에도 몇 번이나 꺼내 봤다.",'“이거 형도 좋아하잖아요. 화 풀어요.”','“내가 언제 화냈다고.” 성화는 과자를 받아 들면서도 윤호의 얼굴을 제대로 보지 못했다.','윤호가 돌아간 뒤에야 성화는 봉지 뒷면의 작은 메모를 발견했다. “형이랑 사이좋게 지내기.”'],
123:["메모를 본 성화는 웃음이 나올 뻔한 걸 간신히 참았다. 이런 걸 굳이 적어 놓는 윤호도, 그걸 소중하게 주머니에 넣는 자신도 이해가 안 됐다. 다음 날 윤호가 감기에 걸렸다는 말을 듣자 성화는 수업이 끝나자마자 약국으로 향했고, 약봉지를 건네면서도 “그냥 남는 거라서 사 온 거야”라는 변명부터 했다. 윤호는 약을 받아 들고도 한동안 문 앞에 서 있었다. “형, 저 아프다고 해서 와 준 거예요?” 성화는 대답 대신 돌아서려 했지만, 윤호의 다음 말에 발걸음이 멈췄다.",'이런 걸 굳이 적어 놓는 윤호도, 그걸 소중하게 주머니에 넣는 자신도 이해가 안 됐다.','다음 날 윤호가 감기에 걸렸다는 말을 듣자 성화는 수업이 끝나자마자 약국으로 향했다.','“그냥 남는 거라서 사 온 거야.” 성화는 약봉지를 건네며 먼저 변명했다.'],
124:["윤호는 약봉지를 받아 들고 한참이나 성화를 바라봤다. “형은 진짜 다정하면서 왜 맨날 아니라고 해요?” “착각하지 마. 너 아프면 귀찮아지니까 그런 거야.” 윤호는 “네, 네” 하고 웃었고, 성화는 그 웃음이 자꾸 생각나 밤늦도록 잠들지 못했다. 다음 날까지 그 말이 귓가에 남을 줄은 몰랐다. 윤호는 더 묻지 않고 약봉지를 꼭 쥐었다. 평소처럼 장난스럽게 웃고 있었지만, 성화는 그 웃음 뒤에 숨은 진심을 처음으로 의식했고 그게 생각보다 훨씬 부담스러웠다.",'“형은 진짜 다정하면서 왜 맨날 아니라고 해요?”','“착각하지 마. 너 아프면 귀찮아지니까 그런 거야.”','윤호는 “네, 네” 하고 웃었고, 성화는 그 웃음이 자꾸 생각나 잠을 설쳤다.'],
125:["성화는 윤호를 좋아하는 게 아니라 그냥 신경이 쓰이는 거라고 스스로에게 몇 번이나 말했다. 하지만 윤호가 하루 동안 연락이 없자 휴대폰만 들여다봤고, 밤늦게 도착한 “오늘 정신없어서 연락 못 했어요. 형 보고 싶었는데”라는 메시지에 그대로 굳어 버렸다. 답장은 “일찍 자”였지만, 성화는 대화창을 닫지 못한 채 한참을 망설였다. 윤호가 정말 보고 싶었다는 말인지, 그냥 습관처럼 한 말인지 성화는 알 수 없었다. 확실한 건 그 짧은 문장 하나 때문에 하루 종일 어지럽던 마음이 더 복잡해졌다는 사실이었다.",'하지만 윤호가 하루 동안 연락이 없자 휴대폰을 확인하는 횟수만 늘어났다.','밤늦게 도착한 “오늘 정신없어서 연락 못 했어요. 형 보고 싶었는데”라는 메시지에 성화는 굳어 버렸다.','답장은 “일찍 자”였지만, 보내고 나서도 대화창을 한참 닫지 못했다.'],
126:["윤호는 다음 날 성화 옆에 와 앉아 어제 답장이 너무 짧았다고 투덜거렸다. “그럼 뭐라고 보내야 하는데.” “저도 보고 싶었다고 해 주면 되죠.” 윤호는 웃었지만 귀 끝이 빨갰다. 성화는 장난이라고 넘기려다가 그 얼굴을 보고 입을 다물었고, 한참 망설인 끝에 겨우 입을 열었다. “……나도, 조금은.” 윤호는 장난으로 넘기지 않고 성화를 가만히 바라봤다. 그 시선이 너무 곧아서 성화는 도망치고 싶어졌지만, 이번에는 괜히 딴소리를 하며 피해 버리고 싶지 않았다.",'“그럼 뭐라고 보내야 하는데.”','“저도 보고 싶었다고 해 주면 되죠.” 윤호는 웃으며 말했지만 귀 끝이 빨갰다.','성화는 한참 망설이다 작게 중얼거렸다. “……나도, 조금은.”']
};
const YUYU_127=[
'박성화는 정윤호를 좋아하지 않는다고 생각했다. 정확히는 그렇게 생각하려고 노력했다. 윤호가 웃으면 괜히 시끄럽다고 느꼈고, 윤호가 조용하면 무슨 일 있나 싶어 신경이 쓰였다. 어느 쪽이든 결국 윤호 때문에 하루가 엉망이 됐다.',
'“형, 저 오늘 집에 혼자 가야 하는데요.”',
'수업이 끝나고 윤호가 가방끈을 만지작거리며 말했다. 성화는 휴대폰을 보던 손을 멈췄다. 같이 가 달라는 말이 목구멍까지 올라와 있는 얼굴이었다. 저렇게 티를 내면서도 직접 부탁은 못 하는 게 정윤호다웠다.',
'“그래서.”',
'“아니, 그냥 그렇다고요.” 윤호는 금세 시선을 돌렸다.',
'성화는 한숨을 쉬었다. “가방 들어. 같이 가면 되잖아.”',
'“진짜요?”',
'윤호의 얼굴이 환해졌다. 성화는 그 표정을 보고 자신이 졌다는 걸 알았다. 매번 이런 식이었다. 윤호가 조금만 기대하는 눈으로 바라보면 못 이기는 척 들어주고, 돌아서서는 괜히 퉁명스럽게 굴었다. 그래야 마음이 들키지 않을 것 같았다.',
'집으로 가는 길에 비가 내리기 시작했다. 성화는 우산을 펼쳐 윤호 쪽으로 기울였다. 윤호는 어깨가 젖는 것도 모르고 성화를 올려다봤다.',
'“형은 꼭 걱정하는 말을 그렇게 해요?”',
'“무슨 말을.”',
'“비 맞지 말라고 하면서 우산은 저한테 다 주잖아요.”',
'“네가 감기 걸리면 귀찮으니까.”',
'윤호는 작게 웃었다. “네. 그런 걸로 해요.”',
'그 말이 이상하게 마음에 걸렸다. 윤호는 언제나 성화의 변명을 알아들으면서도 모르는 척해 줬다. 그래서 더 편했고, 그래서 더 겁이 났다. 언젠가 윤호가 정말로 모르는 척을 그만두면, 성화는 무슨 말을 해야 할지 알 수 없을 것 같았다.',
'집 앞 편의점에 들렀을 때 성화는 딸기우유 두 개를 계산대에 올렸다. 하나는 자기 것이 아니었다. 윤호가 좋아하는 걸 기억하고 있었다는 사실을 들키고 싶지 않아 영수증을 괜히 접었다 폈다.',
'“형, 저 이거 좋아하는 거 기억했어요?”',
'“그냥 눈에 보여서 산 거야.”',
'“저 아직 아무 말도 안 했는데요.”',
'성화는 입을 다물었다. 윤호가 웃음을 참는 얼굴을 하자 귀가 뜨거워졌다. 정말 별것도 아닌 일인데, 왜 정윤호 앞에서는 자꾸만 평소답지 않게 되는 걸까.',
'편의점을 나와 윤호가 먼저 걸어갔다. 성화는 몇 걸음 뒤에서 그 뒷모습을 바라보다가 결국 불렀다.',
'“정윤호.”',
'“네?”',
'“내일도…… 같이 가.”',
'윤호가 천천히 돌아봤다. 놀란 얼굴이 금세 웃는 얼굴로 바뀌었다.',
'“학교요?”',
'“그럼 어디를 가.”',
'“좋아요. 내일도, 모레도요.”',
'성화는 또 괜히 인상을 썼다. “말 많아.”',
'그런데 윤호가 옆으로 다가와 어깨를 살짝 부딪쳤을 때, 성화는 피하지 않았다. 좋아한다는 말은 아직 너무 어려웠다. 대신 내일도 같이 가자고 말할 수는 있었다. 지금의 성화에게는 그 정도가 최선이었다.',
'윤호가 작게 물었다. “형, 저한테 조금은 다정해져도 돼요.”',
'성화는 한참 뒤에야 대답했다. “……노력은 해 볼게.”',
'윤호는 그 대답 하나로 세상을 다 가진 사람처럼 웃었다. 성화는 그 웃음을 보며 생각했다. 아무래도 자신은 이미, 생각했던 것보다 훨씬 오래전부터 정윤호에게 스며들고 있었던 것 같다고.'
];
for(let i=0;i<10;i++){const ep=127-i,body=ep===127?YUYU_127:YUYU_PREVIEWS[ep];P.push({id:1127-i,au:'u',t:'나를 안아주세요 성화님 '+ep+'화',type:'포스트',time:i===0?'오늘':i===1?'어제':`${i}일 전`,ch:'유유',ad:0,tags:[],g:[UY[i],'#f8f5fa'],cv:'나를 안아주세요 성화님',views:[21,18,24,19,22,17,26,20,23,16][i],pt:0,likes:[0,1,0,2,0,0,1,0,3,0][i],rep:0,cm:[0,0,1,0,0,2,0,0,1,0][i],kind:'post',body});}
P.sort((a,b)=>(a.au==='u'?-1:0)-(b.au==='u'?-1:0)||(a.au==='u'&&b.au==='u'?b.id-a.id:a.id-b.id));
const C0={1:[['오피디','5일 전','아직 읽기 전이지만 전 이미 이걸 좋아해요',3,1],['.','4일 전','글 분위기가 너무 좋아요ㅠㅠ',1,1],['꽁치','5일 전','앙 좋아요',1,0],['꾸엉','5일 전','이런것도 재밌게 쓰시네..... 츄베릅',1,0]]};
let S={sub:{},like:{},book:{},rep:{},cm:{},clk:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem('pt1')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('pt1',JSON.stringify(S))}catch(e){}};
const byId=id=>P.find(p=>p.id==id);
const comments=id=>{const base=(C0[id]||Array.from({length:byId(id).cm},(_,i)=>[['단비','하루','모모','새싹','구름','민트'][i%6],`${i+1}일 전`,['잘 읽었어요!','분위기가 좋아요','다음 편 기다릴게요','한 번 더 읽고 왔어요','여운이 남네요','좋은 글 감사합니다'][i%6],i%3+1,i===0?1:0]).map(c=>[c[0],c[1],c[2],c[3],c[4]])).map((c,i)=>({id:`b${i}`,n:c[0],t:c[1],x:c[2],l:c[3],h:c[4],r:[]}));return base.concat(S.cm[id]||[])};
const cnt=(p,k)=>p[k]+(S[k==='likes'?'like':'rep'][p.id]?1:0);
const ccount=id=>comments(id).length;
let view='home',prev='home',tab='discover',st='all',cur=null;
const avatar=(a,sz)=>`<div class="av" style="background:${AU[a].c};${sz?`width:${sz}px;height:${sz}px`:''}">${AU[a].n[0]}</div>`;
function actions(p){const l=S.like[p.id],b=S.book[p.id],r=S.rep[p.id];
return `<div class="act"><button data-act="like" data-id="${p.id}" class="${l?'red':''}">${ic('heart',26,l)}${cnt(p,'likes')}</button><button data-act="cm" data-id="${p.id}">${ic('cmt',26)}${ccount(p.id)}</button><button data-act="rep" data-id="${p.id}" style="${r?'color:#0a84ff':''}">${ic('rep',26)}${cnt(p,'rep')}</button><span class="sp"></span><button data-act="book" data-id="${p.id}">${ic('book',26,b)}</button><button data-act="share">${ic('share',26)}</button></div>`}
function card(p,mode){const sub=S.sub[p.au];
const cs=comments(p.id);
return `<article class="post"><div class="ph">${avatar(p.au)}<div class="who"><b>${AU[p.au].n}</b><span>${p.time} · ${p.type}</span></div><button class="subbtn ${sub?'on':''}" data-act="sub" data-au="${p.au}">${sub?'구독중':'구독'}</button><button data-act="more" data-id="${p.id}">${ic('more',26)}</button></div>
<div class="pt" data-act="open" data-id="${p.id}">${esc(p.t)}</div><div class="pb" data-act="open" data-id="${p.id}">${esc(p.body[0])}</div>
<div class="tags">${p.ad?'<span class="tag ad">성인</span>':''}${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
${mode==='home'?`<div class="cover" data-act="open" data-id="${p.id}" style="background:linear-gradient(135deg,${p.g[0]},${p.g[1]})">${esc(p.cv)}</div>`:''}
<div class="meta">조회 ${p.views.toLocaleString()}${p.pt?` · ${p.pt.toLocaleString()}P`:''}</div>${actions(p)}
${mode==='search'&&cs.length&&p.id%2===0?`<div class="prev" data-act="cm" data-id="${p.id}"><div class="av" style="background:#9aa0a6;width:30px;height:30px">${esc(cs[0].n[0])}</div><span>${esc(cs[0].x)}</span></div>`:''}</article>`}
function renderFeed(){let list=P;if(tab==='subs')list=P.filter(p=>S.sub[p.au]);
$('#feed').innerHTML=list.length?list.map(p=>card(p,'home')).join(''):'<div class="empty">구독한 작가가 없어요.<br>발견 탭에서 구독해 보세요.</div>'}
function renderSearch(){const q=$('#q').value.trim().toLowerCase();$('#qx').style.display=q?'block':'none';
if(!q){$('#sres').innerHTML='<div class="empty">제목, 본문, 작성자, 태그로 검색해 보세요.</div>';return}
let r=P.filter(p=>(AU[p.au].n+p.t+p.body.join(' ')+p.tags.join(' ')).toLowerCase().includes(q));
if(st!=='all')r=r.filter(p=>p.kind===st);
$('#sres').innerHTML=`<div class="cnt">검색 결과 ${r.length}개</div>`+(r.length?r.map(p=>card(p,'search')).join(''):'<div class="empty">검색 결과가 없어요.</div>')}
function renderDetail(){const p=byId(cur),i=P.indexOf(p),pv=P[i-1],nx=P[i+1],cs=comments(p.id),sub=S.sub[p.au];
$('#dtt').textContent=p.t;
const pop=P.filter(x=>x.au===p.au&&x.id!==p.id).slice(0,4);
$('#dbody').innerHTML=`<div style="color:var(--sub);font-size:15px;margin-top:22px">${p.ch||p.type}</div><div class="dtitle">${esc(p.t)}</div>
<div class="ph">${avatar(p.au,44)}<div class="who"><b>${AU[p.au].n}</b><span>${p.time} · 조회 ${p.views}</span></div></div><div class="line"></div>
<div class="body">${p.body.map(x=>`<p>${esc(x)}</p>`).join('')}</div>
<div style="text-align:center;margin:30px 0"><button style="border:1px solid var(--ln);border-radius:12px;padding:14px 22px;font-size:17px"><span style="color:#f33">♥</span> 포스트 후원하기</button></div>
<div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="line"></div>
<div style="display:flex;flex-direction:column;gap:6px">${pv?`<div class="pn" data-act="open" data-id="${pv.id}"><span>이전</span><div><b>${esc(pv.t)}</b>${esc(pv.body[0].slice(0,18))}…</div></div>`:''}${nx?`<div class="pn" data-act="open" data-id="${nx.id}"><span>다음</span><div><b>${esc(nx.t)}</b>${esc(nx.body[0].slice(0,18))}…</div></div>`:''}</div>
<div class="ach">${avatar(p.au,56).replace('class="av"','class="av" style="border-radius:14px;'+'"').replace('style="border-radius:14px;" style="','style="border-radius:14px;')}<div class="who"><b style="font-size:20px">${AU[p.au].n}</b><span>구독자 ${(AU[p.au].subs+(sub?1:0)).toLocaleString()}명</span></div><button class="dark ${sub?'on':''}" data-act="sub" data-au="${p.au}">${sub?'구독중':'구독'}</button></div>
<h4>이 채널의 인기 글</h4><div class="hs">${pop.map(x=>`<div class="hc" data-act="open" data-id="${x.id}"><div>${x.ad?'<span class="badge">성인</span>':''}<b>${esc(x.t)}</b></div><p>${esc(x.body[0])}</p></div>`).join('')}</div>
<div class="cbox"><b style="font-size:18px;cursor:pointer" data-act="cm" data-id="${p.id}">댓글 ${cs.length} ${ic('right',16)}</b>
${cs.slice(0,1).map(c=>`<div class="cr"><div class="av" style="background:#c9ccd1;width:44px;height:44px"></div><span>${esc(c.x)}</span></div>`).join('')}
<div class="cr" data-act="cm" data-id="${p.id}"><div class="av" style="background:#c9ccd1;width:44px;height:44px"></div><span style="color:var(--sub)">작가에게 힘이 되는 한마디 남기기...</span></div></div>`;
const l=S.like[p.id],b=S.book[p.id],r=S.rep[p.id];
$('#pill').innerHTML=`<button data-act="open" data-id="${pv?pv.id:''}" style="opacity:${pv?1:.3}">${ic('back',22)}</button><button data-act="like" data-id="${p.id}" class="${l?'red':''}" style="${l?'color:#f33':''}">${ic('heart',26,l)}${cnt(p,'likes')}</button><button data-act="cm" data-id="${p.id}">${ic('cmt',26)}${ccount(p.id)}</button><button data-act="rep" data-id="${p.id}" style="${r?'color:#0a84ff':''}">${ic('rep',26)}</button><button data-act="book" data-id="${p.id}">${ic('book',26,b)}</button><button data-act="open" data-id="${p.id}" style="opacity:0;pointer-events:none">${ic('list',26)}</button><button data-act="open" data-id="${nx?nx.id:''}" style="opacity:${nx?1:.3}">${ic('right',22)}</button>`;}
function renderNav(){const it=[['home','홈','home',1],['req','리퀘스트','req',0],['search','검색','search',1],['box','보관함','box',0],['me','마이메뉴','me',0]];
$('#nav').innerHTML=it.map(([k,l,i,en])=>`<button class="${en?(view===k||(k==='home'&&view==='detail'&&prev==='home')||(k==='search'&&view==='detail'&&prev==='search')?'on':''):'dis'}" ${en?`data-nav="${k}"`:'tabindex="-1" aria-disabled="true"'}>${ic(i,26)}${l}</button>`).join('')}
function show(v){view=v;document.querySelectorAll('.view').forEach(e=>e.classList.remove('on'));$('#v-'+v).classList.add('on');$('#nav').style.display=v==='detail'?'none':'flex';renderNav()}
function refresh(){if(view==='home')renderFeed();else if(view==='search')renderSearch();else if(view==='detail')renderDetail();else if(view==='ch')renderCh();if(sheetCm)renderCm()}
function go(v){if(v==='detail'){prev=view==='detail'?prev:view}show(v);if(v==='search')setTimeout(()=>$('#q').focus(),50);refresh()}
let sheetCm=null,sort='인기순',replyTo=null;
function openSheet(html,tall){$('#sheet').className='sheet on'+(tall?' tall':'');$('#sheet').innerHTML=html;$('#dim').classList.add('on')}
function closeSheet(){sheetCm=null;replyTo=null;$('#sheet').className='sheet';$('#dim').classList.remove('on')}
function renderCm(){const id=sheetCm;let cs=comments(id).slice();if(sort==='최신순')cs.reverse();else cs.sort((a,b)=>(b.l+(S.clk[id+b.id]?1:0))-(a.l+(S.clk[id+a.id]?1:0)));
const keep=$('#cl')?$('#cl').scrollTop:0;
openSheet(`<div class="grab"></div><div class="sh">댓글 ${cs.length}</div><div style="padding:12px 16px 0;font-size:15px"><button data-act="sort">${sort} ${ic('chev',14)}</button></div>
<div id="cl" style="flex:1;overflow-y:auto;min-height:0">${cs.map(c=>`<div class="cm"><div class="av" style="background:#c9ccd1;width:44px;height:44px"></div><div class="in"><b>${esc(c.n)}</b><time>${c.t}</time><p>${esc(c.x)}</p><div class="row"><button data-act="cl" data-cid="${c.id}" style="display:flex;gap:6px;align-items:center;${S.clk[id+c.id]?'color:#f33':''}">${ic('heart',24,S.clk[id+c.id])}${c.l+(S.clk[id+c.id]?1:0)}</button>${c.h?'<span style="color:#f33">♥ 작가</span>':''}<button data-act="rp" data-cid="${c.id}" style="font-size:16px">답글 쓰기</button><span style="flex:1"></span><button data-act="share">${ic('share',22)}</button><button data-act="cmore" data-cid="${c.id}">${ic('more',22)}</button></div>${(c.r||[]).map(r=>`<div class="reply"><b>${esc(r.n)}</b> ${esc(r.x)}</div>`).join('')}</div></div>`).join('')}</div>
<div class="react">${['🥹','🥰','😂','🙏','🥲','🙇','🤩'].map(e=>`<button data-act="emo" data-e="${e}">${e}</button>`).join('')}</div>
<div class="cin"><input id="ci" placeholder="${replyTo?'답글 남기기':'힘이 되는 한마디 남기기'}" value="${esc(window._cv||'')}"><button data-act="send">등록</button></div>`,1);
if($('#cl'))$('#cl').scrollTop=keep}
function menu(items){openSheet(`<div class="grab"></div>`+items.map(([l,a,d])=>`<button class="opt" data-act="${a}" ${d?`data-id="${d}"`:''}>${l}</button>`).join('')+'<div style="height:calc(12px + env(safe-area-inset-bottom,0px))"></div>')}
let toastT;function toast(m){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;left:50%;bottom:100px;transform:translateX(-50%);background:#222;color:#fff;padding:10px 16px;border-radius:20px;font-size:14px;z-index:50;display:none';document.body.appendChild(t)}t.textContent=m;t.style.display='block';clearTimeout(toastT);toastT=setTimeout(()=>t.style.display='none',1400)}
document.addEventListener('click',e=>{
const nv=e.target.closest('[data-nav]');if(nv){const k=nv.dataset.nav;go(k==='home'?'home':'search');return}
const tb=e.target.closest('[data-tab]');if(tb){tab=tb.dataset.tab;document.querySelectorAll('#hometabs button').forEach(b=>b.classList.toggle('on',b===tb));renderFeed();return}
const sb=e.target.closest('[data-st]');if(sb){st=sb.dataset.st;document.querySelectorAll('#stabs button').forEach(b=>b.classList.toggle('on',b===sb));renderSearch();return}
if(e.target.id==='dim'){closeSheet();return}
const a=e.target.closest('[data-act]');if(!a)return;const act=a.dataset.act,id=a.dataset.id,cid=a.dataset.cid;
if(act==='back'){if(view==='detail')show(prev);else show('home');refresh();return}
if(act==='open'){if(!id)return;cur=+id;if(view!=='detail')prev=view;show('detail');renderDetail();$('#dbody').scrollTop=0;return}
if(act==='sub'){const k=a.dataset.au;S.sub[k]=!S.sub[k];save();refresh();return}
if(act==='like'){S.like[id]=!S.like[id];save();refresh();return}
if(act==='book'){S.book[id]=!S.book[id];save();refresh();toast(S.book[id]?'북마크에 저장했어요':'북마크를 해제했어요');return}
if(act==='rep'){S.rep[id]=!S.rep[id];save();refresh();return}
if(act==='share'){toast('링크를 복사했어요');return}
if(act==='cm'){sheetCm=+id;window._cv='';replyTo=null;renderCm();return}
if(act==='more'){menu([['이 작가 구독 '+(S.sub[byId(id).au]?'취소':'하기'),'msub',id],['북마크 '+(S.book[id]?'해제':'저장'),'mbook',id],['링크 복사','mshare'],['신고하기','mreport'],['취소','close']]);return}
if(act==='dmore'){menu([['링크 복사','mshare'],['신고하기','mreport'],['취소','close']]);return}
if(act==='msub'){const k=byId(id).au;S.sub[k]=!S.sub[k];save();closeSheet();refresh();return}
if(act==='mbook'){S.book[id]=!S.book[id];save();closeSheet();refresh();return}
if(act==='mshare'){closeSheet();toast('링크를 복사했어요');return}
if(act==='mreport'){closeSheet();toast('신고가 접수되었어요');return}
if(act==='close'){closeSheet();return}
if(act==='clear'){$('#q').value='';renderSearch();$('#q').focus();return}
if(act==='sort'){const keepId=sheetCm;sort=sort==='인기순'?'최신순':'인기순';sheetCm=keepId;renderCm();return}
if(act==='cl'){const k=sheetCm+cid;S.clk[k]=!S.clk[k];save();window._cv=$('#ci').value;renderCm();return}
if(act==='rp'){replyTo=cid;$('#ci').placeholder='답글 남기기';$('#ci').focus();return}
if(act==='emo'){$('#ci').value+=a.dataset.e;$('#ci').focus();return}
if(act==='cmore'){toast('신고/차단 메뉴는 시뮬레이션에서 지원하지 않아요');return}
if(act==='send'){const v=$('#ci').value.trim();if(!v)return;const id2=sheetCm;S.cm[id2]=S.cm[id2]||[];
if(replyTo){const t=comments(id2).find(c=>c.id===replyTo);if(t&&t.id[0]==='u'){t.r.push({n:'나',x:v});}else{S.cm[id2].push({id:'u'+Date.now(),n:'나',t:'방금 전',x:'↳ '+v,l:0,h:0,r:[]})}}
else S.cm[id2].push({id:'u'+Date.now(),n:'나',t:'방금 전',x:v,l:0,h:0,r:[]});
save();window._cv='';replyTo=null;sort='최신순';renderCm();$('#cl').scrollTop=1e5;refresh();return}
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='ci')document.querySelector('[data-act=send]').click()});
$('#q').addEventListener('input',renderSearch);
$('#dbody').addEventListener('scroll',e=>{$('#dtt').style.opacity=e.target.scrollTop>80?1:0});
$('#ic-menu').innerHTML=ic('menu',28);$('#ic-add').innerHTML=ic('add',28);$('#ic-gift').innerHTML=ic('gift',28);$('#ic-bell').innerHTML=ic('bell',28);
$('#ic-sback').innerHTML=ic('back',28);$('#ic-dback').innerHTML=ic('back',28);$('#ic-s').innerHTML=ic('search',22);$('#qx').innerHTML=ic('x',22);
$('#ic-set').innerHTML=ic('gear',26);$('#ic-share').innerHTML=ic('share',26);$('#ic-dm').innerHTML=ic('more',26);
/* ===== 작가 프로필(채널) ===== */
let chAu='b',chF='all',chT='a',chB='home';
{const d=document.createElement('div');d.className='view';d.id='v-ch';$('#v-home').after(d);
const s=document.createElement('style');s.textContent='#v-ch .subbtn{display:none}';document.head.appendChild(s)}
function renderCh(){const sub=S.sub[chAu],l=P.filter(p=>p.au===chAu),
r=chT==='s'?l.filter(p=>p.kind==='series'):chT==='c'?[]:chF==='all'?l:l.filter(p=>p.kind===chF),
T=[['a','활동'],['s','시리즈'],['c','커뮤니티']],F=[['all','전체'],['post','포스트'],['request','리퀘스트'],['cm','커뮤니티']];
$('#v-ch').innerHTML=`<div style="height:100%;overflow-y:auto;padding-bottom:90px">
<div style="display:flex;justify-content:space-between;padding:14px 16px"><button data-chb>${ic('back',28)}</button><span style="display:flex;gap:18px">${ic('add',28)}${ic('gift',28)}${ic('bell',28)}</span></div>
<div style="display:flex;gap:16px;padding:8px 16px;align-items:center">${avatar(chAu,104).replace('style="','style="border-radius:22px;')}<div><b style="font-size:26px">${AU[chAu].n}</b><div style="color:var(--sub);margin-top:6px">구독자 ${(AU[chAu].subs+(sub?1:0)).toLocaleString()}명 · 포스트 ${chAu==='u'?127:l.length}개</div><div style="color:var(--sub);margin-top:6px">채널 정보 ${ic('right',14)}</div></div></div>
<div style="display:flex;gap:10px;padding:14px 16px"><button data-act="sub" data-au="${chAu}" style="flex:1;height:48px;border-radius:12px;background:${sub?'#e5e5ea':'#2a2a30'};color:${sub?'#222':'#fff'};font-size:17px">${sub?'구독중':'구독'}</button><button data-act="share" style="width:48px;border-radius:12px;background:#f2f2f5">${ic('share',24)}</button></div>
<div style="display:flex;border-bottom:1px solid var(--ln)">${T.map(([k,n])=>`<button data-cht="${k}" style="flex:1;padding:14px;font-size:18px;color:${chT===k?'#000':'var(--sub)'};font-weight:${chT===k?700:400};border-bottom:3px solid ${chT===k?'#000':'transparent'}">${n}</button>`).join('')}</div>
${chT==='a'?`<div style="display:flex;gap:8px;padding:14px 16px;overflow-x:auto">${F.map(([k,n])=>`<button data-chf="${k}" style="flex:none;padding:10px 18px;border-radius:22px;border:1px solid ${chF===k?'#cfe0ff':'var(--ln)'};background:${chF===k?'#e8f0ff':'none'};color:${chF===k?'#2f6fed':'inherit'}">${n}</button>`).join('')}</div>`:''}
<div style="padding:10px 16px;color:var(--sub);font-weight:700">총 ${chAu==='u'?127:r.length}개</div>${r.length?r.map(p=>card(p,'ch')).join(''):'<div class="empty">아직 없어요.</div>'}${chAu==='u'?'<div style="display:flex;justify-content:center;align-items:center;gap:2px;padding:14px 8px 20px;color:#29292d"><button disabled aria-label="이전 페이지" style="width:24px;height:32px;flex:none;display:grid;place-items:center;color:#a4a4a8;font-size:24px;font-weight:300;line-height:1">‹</button>'+Array.from({length:5},(_,i)=>'<button disabled style="width:40px;height:40px;flex:none;border-radius:13px;background:'+(i===0?'#f1f1f2':'transparent')+';color:#29292d;font-size:22px;font-weight:500;display:grid;place-items:center">'+(i+1)+'</button>').join('')+'<button disabled aria-label="다음 페이지" style="width:24px;height:32px;flex:none;display:grid;place-items:center;color:#29292d;font-size:24px;font-weight:300;line-height:1">›</button></div>':''}</div>`}
document.addEventListener('click',e=>{
if(e.target.closest('[data-chb]')){show(chB);refresh();return}
const t=e.target.closest('[data-cht]'),f=e.target.closest('[data-chf]');
if(t){chT=t.dataset.cht;renderCh();return}if(f){chF=f.dataset.chf;renderCh();return}
if(view==='ch')return;
const h=e.target.closest('.ph .av,.ph .who,.ach .av,.ach .who');if(!h)return;
const a=h.closest('.ph,.ach').querySelector('[data-au]');
chAu=a?a.dataset.au:byId(cur).au;chF='all';chT='a';chB=view;show('ch');renderCh()});
show('home');renderFeed();
