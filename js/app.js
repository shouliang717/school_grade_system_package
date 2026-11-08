// ========================================================
    // Data Structure & Storage Key
    // ========================================================
    const STORAGE_KEY = 'SMALL_SCHOOL_DUAL_EXAM_SYSTEM_V5';

    // Tailored for Small School Single Class with Exam 1 & Exam 2 Records
    const defaultData = {
      schoolName: "新北市市立希望國民中學",
      academicYear: "115",
      semester: "1",
      className: "七年甲班",
      teacherName: "許文華 老師",
      subjects: [
        { id: "chi", name: "國文", fullScore: 100 },
        { id: "eng", name: "英語", fullScore: 100 },
        { id: "math", name: "數學", fullScore: 100 },
        { id: "sci", name: "自然", fullScore: 100 },
        { id: "soc", name: "社會", fullScore: 100 }
      ],
      specialCategories: {
        general: { name: "一般生", label: "一般生", color: "text-slate-600 bg-slate-100" },
        resource: { name: "資源班", label: "資源班", color: "text-purple-700 bg-purple-100 border border-purple-200" },
        iep: { name: "特教生", label: "特教生 (IEP)", color: "text-indigo-700 bg-indigo-100 border border-indigo-200" },
        support: { name: "學習扶助", label: "學習扶助", color: "text-amber-700 bg-amber-100 border border-amber-200" },
        disability: { name: "身心障礙", label: "身障考場調整", color: "text-rose-700 bg-rose-100 border border-rose-200" },
        gifted: { name: "資優方案", label: "資賦優異", color: "text-emerald-700 bg-emerald-100 border border-emerald-200" }
      },
      // 15 Students in this small single class, with realistic dual-exam scores showcasing progress
      students: [
        {
          id: "s01", seatNo: 1, studentId: "115001", name: "陳冠宇", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 82, eng: 78, math: 75, sci: 80, soc: 84 },
          scores2: { chi: 86, eng: 84, math: 85, sci: 88, soc: 90 },
          notes1: "文史科基礎扎實，數學代數觀念可再多加演練。",
          notes2: "課堂主動發問，數學與自然表現大幅躍進！",
          specialNotes: "兩次段考五科全面成長，總平均進步 6.8 分，學習態度積極。"
        },
        {
          id: "s02", seatNo: 2, studentId: "115002", name: "林欣怡", specialType: "gifted", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 92, eng: 95, math: 96, sci: 90, soc: 94 },
          scores2: { chi: 95, eng: 98, math: 100, sci: 96, soc: 98 },
          notes1: "全科均達 90 分以上高標，理解與融會貫通能力極佳。",
          notes2: "數學榮獲滿分，數理探究展現高度潛能。",
          specialNotes: "數理資優充實方案對象；兩次段考穩居全班榜首，持續加深加廣學習。"
        },
        {
          id: "s03", seatNo: 3, studentId: "115003", name: "張子豪", specialType: "resource", specialAccommodations: ["延長作答時間(20分鐘)", "試卷報讀/語音輔助"], excludeRank: true,
          scores1: { chi: 55, eng: 48, math: 42, sci: 52, soc: 58 },
          scores2: { chi: 64, eng: 56, math: 55, sci: 62, soc: 66 },
          notes1: "配合資源班延長時間與報讀服務，能耐心完成所有試題。",
          notes2: "國文、自然、社會三科突破 60 分大關，作答信心大增！",
          specialNotes: "特教資源班個案；落實考場調整後，二段較一段平均進步 9.6 分 (成長率 +18.8%)。"
        },
        {
          id: "s04", seatNo: 4, studentId: "115004", name: "黃品睿", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 70, eng: 68, math: 54, sci: 72, soc: 56 },
          scores2: { chi: 75, eng: 74, math: 80, sci: 78, soc: 82 },
          makeup1: { math: 68, soc: 58 },
          notes1: "數學與社會科基礎題失分較多，已安排課後訂正與補考。",
          notes2: "全科全數及格，數學科達 80 分，訂正習慣收效顯著！",
          specialNotes: "一段補考後澈底釐清觀念，二段總平均較一段大幅提升。"
        },
        {
          id: "s05", seatNo: 5, studentId: "115005", name: "李詠晴", specialType: "support", specialAccommodations: ["個別化評量目標試卷"], excludeRank: false,
          scores1: { chi: 52, eng: 45, math: 48, sci: 56, soc: 60 },
          scores2: { chi: 62, eng: 58, math: 60, sci: 64, soc: 65 },
          notes1: "英數基礎詞彙與運算尚待鞏固，請持續參與第八節學習扶助。",
          notes2: "國文、數學、自然、社會四科均達及格標準，學習扶助成效卓著！",
          specialNotes: "課後學習扶助重點對象；兩次段考對比成長達 +9.6 分，成功擺脫多科待加強。"
        },
        {
          id: "s06", seatNo: 6, studentId: "115006", name: "王柏翔", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 56, eng: 82, math: 74, sci: 55, soc: 78 },
          scores2: { chi: 58, eng: 80, math: 52, sci: 82, soc: 55 },
          makeup1: { chi: 65 },
          notes1: "英語與社會表現良好，惟國文與自然需留意閱讀審題。",
          notes2: "自然科進步至 82 分，但數學與社會科出現粗心失分，需加強複習。",
          specialNotes: "兩次段考單科消長起伏較大，建議建立考前雙週固定複習計畫。"
        },
        {
          id: "s07", seatNo: 7, studentId: "115007", name: "吳佩珊", specialType: "iep", specialAccommodations: ["獨立抽離考場", "放大字體試卷(A3/24pt)", "延長作答時間(20分鐘)"], excludeRank: true,
          scores1: { chi: 65, eng: 62, math: 58, sci: 60, soc: 68 },
          scores2: { chi: 72, eng: 70, math: 65, sci: 68, soc: 74 },
          notes1: "使用 A3 放大字體試卷作答順暢，四科皆達及格水準。",
          notes2: "五科全數及格且突破 70 分，書寫速度與穩定度明顯提升。",
          specialNotes: "IEP 視覺障礙特殊考場服務；兩次段考穩定進步 +7.2 分，達成 IEP 學期目標。"
        },
        {
          id: "s08", seatNo: 8, studentId: "115008", name: "劉宇軒", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 88, eng: 86, math: 90, sci: 88, soc: 86 },
          scores2: { chi: 92, eng: 90, math: 95, sci: 92, soc: 91 },
          notes1: "五科均衡發展，上課專注且筆記條理分明。",
          notes2: "全科突破 90 分優異門檻，熱心協助同學解答課業問題。",
          specialNotes: "兩次段考皆穩居班級前二名，二段總平均再成長 +4.4 分。"
        },
        {
          id: "s09", seatNo: 9, studentId: "115009", name: "蔡宜庭", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 82, eng: 79, math: 70, sci: 80, soc: 82 },
          scores2: { chi: 88, eng: 85, math: 82, sci: 86, soc: 88 },
          notes1: "文科表現穩健，數理邏輯可透過題型歸納進一步提升。",
          notes2: "各科全面突破 80 分，學習方法調整後成效斐然！",
          specialNotes: "二段較一段平均進步 +7.2 分，數學單科成長 12 分最為亮眼。"
        },
        {
          id: "s10", seatNo: 10, studentId: "115010", name: "楊承翰", specialType: "support", specialAccommodations: ["試卷報讀/語音輔助"], excludeRank: false,
          scores1: { chi: 58, eng: 52, math: 46, sci: 55, soc: 60 },
          scores2: { chi: 66, eng: 62, math: 58, sci: 64, soc: 68 },
          notes1: "長篇題幹閱讀較吃力，已申請語音報讀與閱讀理解策略輔導。",
          notes2: "國、英、自、社四科順利及格，語意理解能力大幅增進！",
          specialNotes: "學習扶助暨報讀協助個案；兩次段考對比成長 +9.4 分，進步幅度居全班前茅。"
        },
        {
          id: "s11", seatNo: 11, studentId: "115011", name: "許家豪", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 72, eng: 54, math: 68, sci: 58, soc: 55 },
          scores2: { chi: 74, eng: 56, math: 72, sci: 55, soc: 78 },
          notes1: "國數表現尚可，英語單字量與自然實驗題需再加強。",
          notes2: "社會科大幅進步至 78 分，惟英語與自然仍需持續補考追蹤。",
          specialNotes: "社會與數學穩步上升，建議針對英語及自然安排同儕共學小組。"
        },
        {
          id: "s12", seatNo: 12, studentId: "115012", name: "趙俊傑", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 76, eng: 72, math: 65, sci: 70, soc: 78 },
          scores2: { chi: 82, eng: 78, math: 75, sci: 76, soc: 82 },
          notes1: "各科皆在及格邊緣之上，具備良好發展潛力。",
          notes2: "五科成績全面上揚，國文與社會站上 80 分水準！",
          specialNotes: "兩次段考對比進步 +6.4 分，班級排名穩步向前推進。"
        },
        {
          id: "s13", seatNo: 13, studentId: "115013", name: "孫孟潔", specialType: "disability", specialAccommodations: ["口語作答/電腦作答", "延長作答時間(20分鐘)"], excludeRank: true,
          scores1: { chi: 68, eng: 64, math: 60, sci: 66, soc: 70 },
          scores2: { chi: 75, eng: 72, math: 68, sci: 72, soc: 76 },
          notes1: "透過電腦輔助作答克服手部書寫疲勞，全科穩定及格。",
          notes2: "打字作答熟練度提升，五科平均達 72.6 分，表現優異！",
          specialNotes: "肢體障礙考場調整個案；二段較一段進步 +7.0 分，展現高度學習韌性。"
        },
        {
          id: "s14", seatNo: 14, studentId: "115014", name: "周宏達", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 62, eng: 58, math: 50, sci: 64, soc: 66 },
          scores2: { chi: 68, eng: 65, math: 64, sci: 70, soc: 72 },
          notes1: "文科及格，惟英語與數學未達 60 分，需加強課後練習。",
          notes2: "五科全數及格！數學進步 14 分、英語進步 7 分，值得嘉許。",
          specialNotes: "兩次段考總平均進步 +7.8 分 (成長率 +13%)，榮登本班進步獎楷模。"
        },
        {
          id: "s15", seatNo: 15, studentId: "115015", name: "徐佳慧", specialType: "general", specialAccommodations: [], excludeRank: false,
          scores1: { chi: 88, eng: 90, math: 86, sci: 88, soc: 90 },
          scores2: { chi: 90, eng: 92, math: 90, sci: 90, soc: 92 },
          notes1: "學習態度嚴謹認真，各學科基礎十分穩固。",
          notes2: "五科全數達到 90 分以上優異標準，表現令人讚賞！",
          specialNotes: "兩次段考均維持頂標水準，二段平均再提升至 90.8 分。"
        }
      ]
    };

    // Global Application State
    let appData = null;
    let currentActiveTab = 'entry';
    let currentExamStage = '1'; // '1' = 第一次段考, '2' = 第二次段考
    let currentFilter = 'all';
    let currentSearchTerm = '';
    let editingStudentId = null; // for modal editing

    // Chart instances
    let subjectChartInstance = null;
    let distributionChartInstance = null;
    let studentRadarChartInstance = null;

    // ========================================================
    // Storage & Initialization
    // ========================================================
    function loadData() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          appData = JSON.parse(stored);
        } else {
          appData = JSON.parse(JSON.stringify(defaultData));
          saveData(false);
        }
      } catch (err) {
        console.warn('LocalStorage error or disabled, loading in-memory defaults:', err);
        appData = JSON.parse(JSON.stringify(defaultData));
      }
    }

    function saveData(showToastNotice = true) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
        showAutoSaveIndicator();
        if (showToastNotice) {
          showToast('成績與比對資料已成功儲存至本機！', 'success');
        }
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
        showToast('無法存入本機儲存空間 (容量已滿或無權限)', 'error');
      }
    }

    function showAutoSaveIndicator() {
      const el = document.getElementById('autoSaveIndicator');
      if (el) {
        el.innerHTML = `
          <svg class="w-3 h-3 mr-1 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          已於 ${new Date().toLocaleTimeString()} 存檔
        `;
      }
    }

    // ========================================================
    // UI Helpers & Toasts
    // ========================================================
    function showToast(message, type = 'info') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `p-3.5 rounded-xl shadow-lg text-xs font-semibold flex items-center space-x-2.5 transition-all transform duration-200 pointer-events-auto border ${
        type === 'success' ? 'bg-emerald-800 text-white border-emerald-600' :
        type === 'error' ? 'bg-rose-800 text-white border-rose-600' :
        type === 'warning' ? 'bg-amber-600 text-white border-amber-500' :
        'bg-slate-800 text-white border-slate-700'
      }`;

      let iconSvg = '';
      if (type === 'success') {
        iconSvg = `<svg class="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
      } else if (type === 'error') {
        iconSvg = `<svg class="w-4 h-4 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
      } else {
        iconSvg = `<svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
      }

      toast.innerHTML = `${iconSvg}<span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 250);
      }, 3000);
    }

    function showConfirmModal(title, message, onConfirmCallback) {
      const modal = document.getElementById('customConfirmModal');
      const titleEl = document.getElementById('confirmModalTitle');
      const msgEl = document.getElementById('confirmModalMessage');
      const okBtn = document.getElementById('btnConfirmOk');
      const cancelBtn = document.getElementById('btnConfirmCancel');

      titleEl.textContent = title;
      msgEl.textContent = message;
      modal.classList.remove('hidden');

      function cleanup() {
        modal.classList.add('hidden');
        okBtn.onclick = null;
        cancelBtn.onclick = null;
      }

      okBtn.onclick = () => {
        cleanup();
        onConfirmCallback();
      };
      cancelBtn.onclick = () => {
        cleanup();
      };
    }

    // ========================================================
    // Calculations & Rankings Engine
    // ========================================================
        // Helper: calculate effective score considering makeup exam
    function getEffectiveSubjectScore(student, examNum, subId) {
      const scoreObj = (examNum === '1') ? student.scores1 : student.scores2;
      const makeupObj = (examNum === '1') ? (student.makeup1 || {}) : (student.makeup2 || {});
      const rawVal = scoreObj ? scoreObj[subId] : '';
      if (rawVal === '' || rawVal === null || rawVal === undefined) return { raw: '', effective: '', hasMakeup: false, makeupScore: '', note: '' };

      const raw = Number(rawVal);
      // Include all general/regular-assessed students (excluding only IEP/resource students exempt from regular ranking)
      const isRegularAssessed = !student.excludeRank && student.specialType !== 'iep' && student.specialType !== 'resource';
      const mkVal = makeupObj[subId];

      if (isRegularAssessed && raw < 60 && mkVal !== undefined && mkVal !== null && mkVal !== '') {
        const mk = Number(mkVal);
        let eff = raw;
        let note = '';
        if (mk >= 60) {
          eff = 60;
          note = `補考得 ${mk}分，依規以 60分採計`;
        } else {
          eff = Math.max(raw, mk);
          note = `補考得 ${mk}分，依規取最高分 ${eff}分採計`;
        }
        return { raw, effective: eff, hasMakeup: true, makeupScore: mk, note };
      }

      return { raw, effective: raw, hasMakeup: false, makeupScore: '', note: '' };
    }

    function calculateStudentTotalsForExam(student, examNum = '1') {
      let total = 0;
      let count = 0;
      appData.subjects.forEach(sub => {
        const res = getEffectiveSubjectScore(student, examNum, sub.id);
        if (res.effective !== '' && res.effective !== null && res.effective !== undefined) {
          total += Number(res.effective);
          count++;
        }
      });
      const avg = count > 0 ? (total / count) : 0;
      return { total, avg: parseFloat(avg.toFixed(1)), count };
    }

    function computeDualExamRankings() {
      // 1. Calculate Exam 1 Totals & Ranks
      appData.students.forEach(s => {
        const st1 = calculateStudentTotalsForExam(s, '1');
        s._total1 = st1.total;
        s._avg1 = st1.avg;
      });

      const ranked1 = appData.students.filter(s => !s.excludeRank);
      ranked1.sort((a, b) => b._avg1 - a._avg1);
      let r1 = 1;
      ranked1.forEach((student, index) => {
        if (index > 0 && student._avg1 < ranked1[index - 1]._avg1) {
          r1 = index + 1;
        }
        student._rank1 = r1;
      });
      appData.students.forEach(s => {
        if (s.excludeRank) s._rank1 = "IEP免列";
      });

      // 2. Calculate Exam 2 Totals & Ranks
      appData.students.forEach(s => {
        const st2 = calculateStudentTotalsForExam(s, '2');
        s._total2 = st2.total;
        s._avg2 = st2.avg;
        
        // Progress difference
        s._diffAvg = parseFloat((s._avg2 - s._avg1).toFixed(1));
        s._diffTotal = s._total2 - s._total1;
        s._growthRate = s._avg1 > 0 ? parseFloat(((s._diffAvg / s._avg1) * 100).toFixed(1)) : 0;
      });

      const ranked2 = appData.students.filter(s => !s.excludeRank);
      ranked2.sort((a, b) => b._avg2 - a._avg2);
      let r2 = 1;
      ranked2.forEach((student, index) => {
        if (index > 0 && student._avg2 < ranked2[index - 1]._avg2) {
          r2 = index + 1;
        }
        student._rank2 = r2;
      });
      appData.students.forEach(s => {
        if (s.excludeRank) {
          s._rank2 = "IEP免列";
          s._rankShift = "IEP";
        } else {
          // Rank Shift: e.g. from rank 5 to rank 3 means +2 ranks
          const shift = (s._rank1 - s._rank2);
          s._rankShift = shift; // >0 is up, <0 is down, 0 is same
        }
      });
    }

    // ========================================================
    // TAB 1: Render Grade Entry Workbench
    // ========================================================
    function updateSchoolHeader() {
      document.getElementById('displaySchoolName').textContent = appData.schoolName;
      document.getElementById('displayClassNameTag').textContent = appData.className;
      document.getElementById('displayExamMeta').textContent = `${appData.academicYear} • 一段與二段成長追蹤`;

      document.getElementById('headingClassName').textContent = appData.className;
      document.getElementById('headingTeacherName').textContent = `導師：${appData.teacherName}`;

      // Settings inputs
      document.getElementById('settingSchoolName').value = appData.schoolName;
      document.getElementById('settingClassName').value = appData.className;
      document.getElementById('settingTeacher').value = appData.teacherName;
      document.getElementById('settingAcademicYear').value = appData.academicYear;

      const specialCount = appData.students.filter(s => s.specialType && s.specialType !== 'general').length;
      document.getElementById('navSpecialCountBadge').textContent = specialCount;
    }

    function renderGradeTable() {
      computeDualExamRankings();

      const isExam1 = (currentExamStage === '1');
      document.getElementById('headingExamBadge').textContent = isExam1 ? '第一次段考成績登打' : '第二次段考成績登打';
      const thComment = document.getElementById('thExamCommentHeader');
      if (thComment) thComment.textContent = isExam1 ? '第一次段考導師評語' : '第二次段考導師評語';
      document.getElementById('headingExamBadge').className = isExam1
        ? 'text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200'
        : 'text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200';
      
      document.getElementById('badgeExamTitle').textContent = isExam1 ? '第一次段考' : '第二次段考';

      // Switcher buttons UI
      const btn1 = document.getElementById('btnSwitchExam1');
      const btn2 = document.getElementById('btnSwitchExam2');
      if (isExam1) {
        btn1.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 bg-brand-600 text-white shadow-sm';
        btn2.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 text-slate-700 hover:text-slate-900';
      } else {
        btn1.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 text-slate-700 hover:text-slate-900';
        btn2.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 bg-emerald-600 text-white shadow-sm';
      }

      // Filter Counts
      document.getElementById('countFilterAll').textContent = appData.students.length;
      document.getElementById('countFilterSpecial').textContent = appData.students.filter(s => s.specialType !== 'general').length;

      let displayStudents = [...appData.students];

      // Filters
      if (currentFilter === 'special') {
        displayStudents = displayStudents.filter(s => s.specialType !== 'general');
      } else if (currentFilter === 'resource') {
        displayStudents = displayStudents.filter(s => s.specialType === 'resource');
      } else if (currentFilter === 'support') {
        displayStudents = displayStudents.filter(s => s.specialType === 'support');
      } else if (currentFilter === 'fail') {
        displayStudents = displayStudents.filter(s => {
          const scoreObj = isExam1 ? s.scores1 : s.scores2;
          return appData.subjects.some(sub => (scoreObj ? scoreObj[sub.id] || 0 : 0) < 60);
        });
      }

      // Search
      if (currentSearchTerm.trim()) {
        const q = currentSearchTerm.trim().toLowerCase();
        displayStudents = displayStudents.filter(s => 
          s.name.toLowerCase().includes(q) || 
          String(s.seatNo).includes(q) || 
          (s.studentId && s.studentId.toLowerCase().includes(q))
        );
      }

      displayStudents.sort((a, b) => a.seatNo - b.seatNo);

      const tbody = document.getElementById('gradeTableBody');
      tbody.innerHTML = '';

      if (displayStudents.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="13" class="py-12 text-center text-slate-400">無符合條件的學生資料</td>
          </tr>
        `;
      }

      displayStudents.forEach(student => {
        const tr = document.createElement('tr');
        const isSpecial = student.specialType && student.specialType !== 'general';
        tr.className = `hover:bg-slate-50 transition border-b border-slate-200 ${isSpecial ? 'bg-purple-50/20' : ''}`;

        // Badge
        const catMeta = appData.specialCategories[student.specialType] || appData.specialCategories.general;
        const badgeHtml = isSpecial 
          ? `<button onclick="openSpecialModal('${student.id}')" title="點擊編輯特教設定" class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-semibold ${catMeta.color} hover:brightness-95 transition">
               <span>${catMeta.label}</span>
               ${student.excludeRank ? '<span class="text-[10px] bg-purple-200 text-purple-900 px-1 rounded ml-1">免排</span>' : ''}
             </button>`
          : `<button onclick="openSpecialModal('${student.id}')" class="text-xs text-slate-400 hover:text-brand-600 hover:bg-slate-100 px-2 py-0.5 rounded transition">
               一般生 <span class="text-[10px] text-slate-300">+標記</span>
             </button>`;

        // Accommodations tags
        let accommodationsHtml = '<span class="text-slate-300 text-xs">—</span>';
        if (student.specialAccommodations && student.specialAccommodations.length > 0) {
          const shortTags = student.specialAccommodations.map(item => {
            const shortName = item.includes('延長') ? '延長時間' :
                              item.includes('報讀') ? '報讀服務' :
                              item.includes('放大') ? '放大卷' :
                              item.includes('考場') ? '抽離考場' : '調整';
            return `<span class="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] px-1.5 py-0.2 rounded font-medium">${shortName}</span>`;
          }).join(' ');
          accommodationsHtml = `<div class="flex flex-wrap gap-1">${shortTags}</div>`;
        }

        // Score inputs according to currentExamStage
        const scoreObj = isExam1 ? (student.scores1 || {}) : (student.scores2 || {});
        let scoreInputsHtml = '';
        appData.subjects.forEach(sub => {
          const val = scoreObj[sub.id] !== undefined ? scoreObj[sub.id] : '';
          const numVal = Number(val);
          let colorClass = 'text-slate-800 bg-white border-slate-300';
          if (val !== '' && !isNaN(numVal)) {
            if (numVal < 60) colorClass = 'text-rose-700 bg-rose-50/70 border-rose-300 font-bold';
            else if (numVal >= 90) colorClass = 'text-emerald-700 bg-emerald-50/50 border-emerald-300 font-semibold';
          }

          const effInfo = getEffectiveSubjectScore(student, isExam1 ? '1' : '2', sub.id);
          const makeupBadge = effInfo.hasMakeup 
            ? `<div class="text-[10px] text-emerald-700 font-bold leading-tight" title="${effInfo.note}">採計:${effInfo.effective}<span class="text-rose-600 font-semibold">(補)</span></div>`
            : '';

          scoreInputsHtml += `
            <td class="py-1.5 px-1 text-center border-r border-slate-200">
              <input type="number" 
                     data-student-id="${student.id}" 
                     data-subject="${sub.id}" 
                     data-seat="${student.seatNo}" 
                     min="0" max="100" 
                     value="${val}" 
                     class="grade-input w-16 text-center py-1 text-xs sm:text-sm rounded border focus:outline-none focus:ring-2 focus:ring-brand-500 ${colorClass}"
                     onchange="handleScoreChange('${student.id}', '${sub.id}', this.value)"
                     onkeydown="handleGridKeyNav(event, '${student.id}', '${sub.id}')"
              >
              ${makeupBadge}
            </td>
          `;
        });

        // Current Exam Total and Rank
        const currentTotal = isExam1 ? student._total1 : student._total2;
        const currentAvg = isExam1 ? student._avg1 : student._avg2;
        const currentRank = isExam1 ? student._rank1 : student._rank2;

        const rankDisplay = student.excludeRank
          ? `<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">IEP免列</span>`
          : `<span class="font-bold text-slate-800">${currentRank || '—'}</span>`;

        tr.innerHTML = `
          <td class="py-2.5 px-3 text-center font-mono font-medium text-slate-600 border-r border-slate-200">${student.seatNo}</td>
          <td class="py-2.5 px-3 font-semibold text-slate-900 border-r border-slate-200 whitespace-nowrap">
            <div>${student.name}</div>
            <div class="text-[10px] text-slate-400 font-mono">${student.studentId || ''}</div>
          </td>
          <td class="py-2.5 px-2 text-center border-r border-slate-200">${badgeHtml}</td>
          <td class="py-2.5 px-2 border-r border-slate-200">${accommodationsHtml}</td>
          ${scoreInputsHtml}
          <td class="py-2.5 px-2 text-center font-mono font-semibold text-slate-800 border-r border-slate-200 bg-slate-50/60">${currentTotal}</td>
          <td class="py-2.5 px-2 text-center font-mono font-bold text-brand-700 border-r border-slate-200 bg-slate-50/60">${currentAvg}</td>
          <td class="py-2.5 px-2 text-center border-r border-slate-200 bg-slate-50/60">${rankDisplay}</td>
          <td class="py-1.5 px-2 border-r border-slate-200 bg-amber-50/20">
            <div class="flex items-center space-x-1">
              <input type="text"
                     value="${isExam1 ? (student.notes1 || '') : (student.notes2 || '')}"
                     placeholder="${isExam1 ? '輸入第一次段考評語...' : '輸入第二次段考評語...'}"
                     class="w-full text-xs px-2 py-1 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-700"
                     onchange="handleExamNoteChange('${student.id}', '${isExam1 ? '1' : '2'}', this.value)"
              >
              <button onclick="generateSingleStudentExamAINote('${student.id}', '${isExam1 ? '1' : '2'}')" title="AI 智慧生成此生本次段考評語" class="px-1.5 py-1 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold shrink-0 transition active:scale-95">
                ✨
              </button>
            </div>
          </td>
          <td class="py-2.5 px-2 text-center whitespace-nowrap">
            <button onclick="openStudentGrowthModal('${student.id}')" title="查看兩次段考學習成長診斷" class="text-emerald-600 hover:text-emerald-800 p-1 rounded hover:bg-emerald-50 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </button>
            <button onclick="openSpecialModal('${student.id}')" title="特教評量設定" class="text-indigo-600 hover:text-indigo-800 p-1 rounded hover:bg-indigo-50 transition ml-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </button>
            <button onclick="handleDeleteStudent('${student.id}')" title="刪除學生" class="text-rose-500 hover:text-rose-700 p-1 rounded hover:bg-rose-50 transition ml-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </td>
        `;

        tbody.appendChild(tr);
      });

      // Update Column Footer Summary
      updateColumnAverages(displayStudents, isExam1);

      // Top Overview Badges
      const specialInClass = appData.students.filter(s => s.specialType !== 'general').length;
      document.getElementById('badgeClassCount').textContent = appData.students.length;
      document.getElementById('badgeClassSpecialCount').textContent = specialInClass;

      let allAvgs = appData.students.map(s => isExam1 ? s._avg1 : s._avg2);
      let classAvgVal = allAvgs.length > 0 ? (allAvgs.reduce((a, b) => a + b, 0) / allAvgs.length).toFixed(1) : '0.0';
      document.getElementById('badgeClassAvg').textContent = classAvgVal;

      let passingCount = allAvgs.filter(v => v >= 60).length;
      let passRate = allAvgs.length > 0 ? Math.round((passingCount / allAvgs.length) * 100) : 0;
      document.getElementById('badgeClassPassRate').textContent = `${passRate}%`;
    }

    function updateColumnAverages(students, isExam1) {
      if (!students || students.length === 0) return;

      const subSums = { chi: 0, eng: 0, math: 0, sci: 0, soc: 0 };
      const subCounts = { chi: 0, eng: 0, math: 0, sci: 0, soc: 0 };
      let grandTotalSum = 0;
      let grandAvgSum = 0;

      students.forEach(s => {
        const scoreObj = isExam1 ? (s.scores1 || {}) : (s.scores2 || {});
        appData.subjects.forEach(sub => {
          const val = scoreObj[sub.id];
          if (val !== undefined && val !== null && val !== '') {
            subSums[sub.id] += Number(val);
            subCounts[sub.id]++;
          }
        });
        const currentTotal = isExam1 ? s._total1 : s._total2;
        const currentAvg = isExam1 ? s._avg1 : s._avg2;
        grandTotalSum += currentTotal;
        grandAvgSum += currentAvg;
      });

      document.getElementById('avgColChi').textContent = subCounts.chi ? (subSums.chi / subCounts.chi).toFixed(1) : '0.0';
      document.getElementById('avgColEng').textContent = subCounts.eng ? (subSums.eng / subCounts.eng).toFixed(1) : '0.0';
      document.getElementById('avgColMath').textContent = subCounts.math ? (subSums.math / subCounts.math).toFixed(1) : '0.0';
      document.getElementById('avgColSci').textContent = subCounts.sci ? (subSums.sci / subCounts.sci).toFixed(1) : '0.0';
      document.getElementById('avgColSoc').textContent = subCounts.soc ? (subSums.soc / subCounts.soc).toFixed(1) : '0.0';

      document.getElementById('totalColAvg').textContent = (grandTotalSum / students.length).toFixed(1);
      document.getElementById('overallColAvg').textContent = (grandAvgSum / students.length).toFixed(1);
    }

    function handleScoreChange(studentId, subjectId, value) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;

      const isExam1 = (currentExamStage === '1');
      if (isExam1) {
        if (!student.scores1) student.scores1 = {};
        student.scores1[subjectId] = value === '' ? '' : Math.min(100, Math.max(0, parseFloat(value) || 0));
      } else {
        if (!student.scores2) student.scores2 = {};
        student.scores2[subjectId] = value === '' ? '' : Math.min(100, Math.max(0, parseFloat(value) || 0));
      }

      computeDualExamRankings();
      renderGradeTable();
      saveData(false);
    }

    function handleExamNoteChange(studentId, examNum, value) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;
      if (examNum === '1') {
        student.notes1 = value.trim();
      } else {
        student.notes2 = value.trim();
      }
      saveData(false);
      showToast(`已更新 ${student.name} 的第${examNum === '1' ? '一' : '二'}次段考導師評語！`, 'success');
    }

    function handleGridKeyNav(event, studentId, subjectId) {
      if (event.key === 'Enter' || event.key === 'ArrowDown') {
        event.preventDefault();
        const currentInput = event.target;
        const inputs = Array.from(document.querySelectorAll(`.grade-input[data-subject="${subjectId}"]`));
        const currentIndex = inputs.indexOf(currentInput);
        if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
          inputs[currentIndex + 1].focus();
          inputs[currentIndex + 1].select();
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const currentInput = event.target;
        const inputs = Array.from(document.querySelectorAll(`.grade-input[data-subject="${subjectId}"]`));
        const currentIndex = inputs.indexOf(currentInput);
        if (currentIndex > 0) {
          inputs[currentIndex - 1].focus();
          inputs[currentIndex - 1].select();
        }
      }
    }

    // ========================================================
    // AI Comment & Dual-Exam Diagnostic Generation Engine
    // ========================================================
    let currentGrowthModalStudentId = null;

    function buildSingleExamAIComment(student, examNum = '1') {
      computeDualExamRankings();
      const scoreObj = (examNum === '1') ? (student.scores1 || {}) : (student.scores2 || {});
      const avg = (examNum === '1') ? student._avg1 : student._avg2;

      const subList = [];
      const failList = [];
      const highList = [];
      const makeupList = [];

      appData.subjects.forEach(sub => {
        const eff = getEffectiveSubjectScore(student, examNum, sub.id);
        if (eff.raw !== '' && eff.raw !== null && eff.raw !== undefined) {
          const val = Number(eff.raw);
          subList.push({ name: sub.name, val, eff: Number(eff.effective) });
          if (val >= 85) highList.push(`${sub.name}(${val}分)`);
          if (val < 60) {
            if (eff.hasMakeup) {
              makeupList.push(`${sub.name}(補考後採計${eff.effective}分)`);
            } else {
              failList.push(`${sub.name}(${val}分)`);
            }
          }
        }
      });

      if (subList.length === 0) {
        return `尚未登錄第${examNum === '1' ? '一' : '二'}次段考各科分數，請先輸入成績後再執行 AI 評語生成。`;
      }

      subList.sort((a, b) => b.val - a.val);
      const bestSub = subList[0];
      const weakestSub = subList[subList.length - 1];

      const parts = [];

      // 1. Special Ed / Accommodation Opening if applicable
      if (student.specialType === 'resource' || student.specialType === 'iep' || student.specialType === 'disability') {
        const accs = (student.specialAccommodations && student.specialAccommodations.length > 0)
          ? `配合「${student.specialAccommodations.slice(0, 2).join('、')}」等調整措施，`
          : '在個別化教育支持下，';
        parts.push(`${accs}能認真完成本次評量`);
      } else if (student.specialType === 'support') {
        parts.push(`持續參與學習扶助課程，努力鞏固基礎`);
      }

      // 2. Overall Performance & Best Subjects
      if (avg >= 90) {
        parts.push(`本次段考五科平均達 ${avg} 分優異水準，其中以${highList.slice(0, 3).join('、')}表現最為亮眼，展現高度自律與理解力`);
      } else if (avg >= 80) {
        parts.push(`本次段考整體表現良好（平均 ${avg} 分），${bestSub.name}科達 ${bestSub.val} 分極具優勢`);
      } else if (avg >= 70) {
        parts.push(`本次段考表現穩健（平均 ${avg} 分），${bestSub.name}科（${bestSub.val}分）掌握度佳`);
      } else if (avg >= 60) {
        parts.push(`本次段考總平均達及格標準（${avg} 分），其中${bestSub.name}科（${bestSub.val}分）表現相對穩定`);
      } else {
        parts.push(`本次段考以${bestSub.name}科（${bestSub.val}分）表現較佳，基礎觀念正逐步建立中`);
      }

      // 3. Weakest / Failing / Makeup Guidance
      if (makeupList.length > 0) {
        parts.push(`惟${makeupList.join('、')}經補考輔導後已達採計標準，訂正態度值得肯定`);
      }
      if (failList.length > 0) {
        if (student.excludeRank) {
          parts.push(`建議針對${failList.map(x => x.split('(')[0]).join('、')}持續依 IEP 個別化目標進行拆解練習，多予正向鼓勵。`);
        } else {
          parts.push(`惟${failList.join('、')}未滿60分，請把握課後補考輔導與錯題訂正，強化核心觀念。`);
        }
      } else if (weakestSub && weakestSub.val < 80) {
        parts.push(`後續可針對${weakestSub.name}科（${weakestSub.val}分）多加練習題型變化，必能更上層樓。`);
      } else {
        parts.push(`請持續保持良好閱讀與探究習慣，精益求精！`);
      }

      return parts.join('；');
    }

    function buildDualComparisonAIComment(student) {
      computeDualExamRankings();
      const avg1 = student._avg1;
      const avg2 = student._avg2;
      const diff = student._diffAvg;
      const rate = student._growthRate;

      const improvedSubs = [];
      const droppedSubs = [];
      const crossedPassSubs = [];

      appData.subjects.forEach(sub => {
        const v1 = student.scores1 && student.scores1[sub.id] !== undefined && student.scores1[sub.id] !== '' ? Number(student.scores1[sub.id]) : null;
        const v2 = student.scores2 && student.scores2[sub.id] !== undefined && student.scores2[sub.id] !== '' ? Number(student.scores2[sub.id]) : null;
        if (v1 !== null && v2 !== null) {
          const d = v2 - v1;
          if (d >= 5) improvedSubs.push({ name: sub.name, d, v1, v2 });
          else if (d <= -5) droppedSubs.push({ name: sub.name, d, v1, v2 });
          if (v1 < 60 && v2 >= 60) crossedPassSubs.push(`${sub.name}(${v1}➔${v2}分)`);
        }
      });

      improvedSubs.sort((a, b) => b.d - a.d);
      droppedSubs.sort((a, b) => a.d - b.d);

      const parts = [];

      // 1. Special category tag
      const catMeta = appData.specialCategories[student.specialType];
      if (student.specialType && student.specialType !== 'general' && catMeta) {
        parts.push(`【${catMeta.label}追蹤】`);
      }

      // 2. Overall Avg & Rank comparison
      if (diff >= 6) {
        parts.push(`兩次段考總平均由 ${avg1} 分大幅躍升至 ${avg2} 分（進步 +${diff} 分，成長率 +${rate}%）`);
      } else if (diff > 0) {
        parts.push(`二段總平均（${avg2}分）較一段（${avg1}分）穩步提升 +${diff} 分（成長 +${rate}%）`);
      } else if (diff === 0) {
        parts.push(`兩次段考總平均皆維持於 ${avg2} 分，整體學習表現相當平穩`);
      } else {
        parts.push(`二段總平均（${avg2}分）較一段（${avg1}分）微幅調整 ${diff} 分`);
      }

      if (!student.excludeRank && typeof student._rankShift === 'number') {
        if (student._rankShift > 0) {
          parts.push(`班排名推進 ${student._rankShift} 名（第${student._rank1}名➔第${student._rank2}名）`);
        } else if (student._rankShift < 0) {
          parts.push(`班排名變動 ${Math.abs(student._rankShift)} 名`);
        }
      }

      // 3. Subject highlights & crossing 60 threshold
      if (crossedPassSubs.length > 0) {
        parts.push(`其中${crossedPassSubs.join('、')}成功跨越 60 分及格門檻，值得高度肯定`);
      } else if (improvedSubs.length > 0) {
        const topImp = improvedSubs.slice(0, 2).map(x => `${x.name}科進步+${x.d}分`).join('、');
        parts.push(`尤以${topImp}突破最為顯著`);
      }

      if (droppedSubs.length > 0) {
        const topDrop = droppedSubs.slice(0, 2).map(x => `${x.name}科(${x.d}分)`).join('、');
        parts.push(`惟${topDrop}稍有震盪，建議檢視考卷錯題並調整考前複習分配。`);
      } else {
        parts.push(`各學科展現良好學習韌性，請持續保持！`);
      }

      return parts.join('，').replace('】，，', '】').replace('】，', '】');
    }

    function generateSingleStudentExamAINote(studentId, examNum) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;
      const comment = buildSingleExamAIComment(student, examNum);
      if (examNum === '1') {
        student.notes1 = comment;
      } else {
        student.notes2 = comment;
      }
      saveData(false);
      renderGradeTable();
      renderPrintPreview();
      showToast(`✨ AI 已為「${student.name}」生成第${examNum === '1' ? '一' : '二'}次段考個人化導師評語！`, 'success');
    }

    function batchGenerateAllExamAINotes() {
      const examNum = currentExamStage;
      const examTitle = examNum === '1' ? '第一次段考' : '第二次段考';
      appData.students.forEach(s => {
        const comment = buildSingleExamAIComment(s, examNum);
        if (examNum === '1') {
          s.notes1 = comment;
        } else {
          s.notes2 = comment;
        }
      });
      saveData(false);
      renderGradeTable();
      renderPrintPreview();
      showToast(`✨ AI 已一鍵完成全班 ${appData.students.length} 位學生「${examTitle}」導師評語生成！`, 'success');
    }

    function handleDualAnalysisNoteChange(studentId, value) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;
      student.specialNotes = value.trim();
      saveData(false);
      renderSpecialHub();
      renderPrintPreview();
      showToast(`已更新 ${student.name} 的兩次段考綜合比較分析！`, 'success');
    }

    function generateSingleStudentDualAINote(studentId) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;
      student.specialNotes = buildDualComparisonAIComment(student);
      saveData(false);
      renderComparisonTab();
      renderSpecialHub();
      renderPrintPreview();
      showToast(`✨ AI 已為「${student.name}」生成兩次段考綜合比較分析！`, 'success');
    }

    function batchGenerateAllDualAINotes() {
      appData.students.forEach(s => {
        s.specialNotes = buildDualComparisonAIComment(s);
      });
      saveData(false);
      renderComparisonTab();
      renderSpecialHub();
      renderPrintPreview();
      showToast(`✨ AI 已一鍵完成全班 ${appData.students.length} 位學生「兩次段考比較分析」生成！`, 'success');
    }


    // ========================================================
    // TAB 2: Dual Exam Comparison & Progress Rankings
    // ========================================================
    function renderComparisonTab() {
      computeDualExamRankings();

      const students = appData.students;
      const totalCount = students.length;

      // 1. Compute overall metrics
      const avg1Total = students.map(s => s._avg1).reduce((a, b) => a + b, 0);
      const avg2Total = students.map(s => s._avg2).reduce((a, b) => a + b, 0);
      const classAvg1 = totalCount > 0 ? (avg1Total / totalCount).toFixed(1) : '0.0';
      const classAvg2 = totalCount > 0 ? (avg2Total / totalCount).toFixed(1) : '0.0';
      const classAvgDiff = (parseFloat(classAvg2) - parseFloat(classAvg1)).toFixed(1);

      document.getElementById('compareClassAvg1').textContent = classAvg1;
      document.getElementById('compareClassAvg2').textContent = classAvg2;

      const diffBadge = document.getElementById('compareClassAvgDiffBadge');
      if (parseFloat(classAvgDiff) > 0) {
        diffBadge.className = 'text-xs font-bold mt-1 text-emerald-600 flex items-center';
        diffBadge.innerHTML = `↑ +${classAvgDiff} 分 (提升)`;
      } else if (parseFloat(classAvgDiff) < 0) {
        diffBadge.className = 'text-xs font-bold mt-1 text-rose-600 flex items-center';
        diffBadge.innerHTML = `↓ ${classAvgDiff} 分 (退步)`;
      } else {
        diffBadge.className = 'text-xs font-bold mt-1 text-slate-500 flex items-center';
        diffBadge.innerHTML = `━ 持平 (0.0分)`;
      }

      // Progress count & passing rate
      const progressStudents = students.filter(s => s._diffAvg > 0);
      const dropStudents = students.filter(s => s._diffAvg < 0);
      document.getElementById('compareProgressCount').textContent = progressStudents.length;
      document.getElementById('compareTotalCount').textContent = totalCount;
      document.getElementById('compareDropCount').textContent = `${students.length - progressStudents.length}`;
      document.getElementById('compareProgressPercent').textContent = totalCount > 0 ? `${Math.round((progressStudents.length / totalCount) * 100)}%` : '0%';

      const pass1 = students.filter(s => s._avg1 >= 60).length;
      const pass2 = students.filter(s => s._avg2 >= 60).length;
      const passRate1 = totalCount > 0 ? Math.round((pass1 / totalCount) * 100) : 0;
      const passRate2 = totalCount > 0 ? Math.round((pass2 / totalCount) * 100) : 0;
      const passRateDiff = passRate2 - passRate1;
      document.getElementById('comparePassRate1').textContent = `${passRate1}%`;
      document.getElementById('comparePassRate2').textContent = `${passRate2}%`;
      document.getElementById('comparePassRateDiffBadge').textContent = passRateDiff >= 0 ? `↑ 增長 +${passRateDiff}%` : `↓ 下降 ${passRateDiff}%`;

      // Special Ed progress count
      const specialStudents = students.filter(s => s.specialType && s.specialType !== 'general');
      const specialProgress = specialStudents.filter(s => s._diffAvg > 0);
      document.getElementById('compareSpecialProgressCount').textContent = specialProgress.length;
      document.getElementById('compareSpecialTotalCount').textContent = specialStudents.length;

      // 2. Render Sub-view 1: Full Comparison Table
      renderCompareFullTable();

      // 3. Render Sub-view 2: Progress Ranking
      renderProgressRankTable();

      // 4. Render Sub-view 3: Subject Progress Ranking
      renderSubjectProgressTable();
    }

    function renderCompareFullTable() {
      const tbody = document.getElementById('compareFullTableBody');
      tbody.innerHTML = '';

      const students = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      students.forEach(s => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition border-b border-slate-200 cursor-pointer';
        tr.onclick = (e) => {
          if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
            openStudentGrowthModal(s.id);
          }
        };

        const catMeta = appData.specialCategories[s.specialType] || appData.specialCategories.general;
        const isSpecial = s.specialType !== 'general';

        // Rank Shift Symbol
        let shiftHtml = '';
        if (s.excludeRank) {
          shiftHtml = `<span class="text-purple-600 font-bold">IEP免列</span>`;
        } else if (s._rankShift > 0) {
          shiftHtml = `<span class="text-emerald-600 font-bold flex items-center justify-center">↑ 升 ${s._rankShift} 名</span>`;
        } else if (s._rankShift < 0) {
          shiftHtml = `<span class="text-rose-600 font-bold flex items-center justify-center">↓ 降 ${Math.abs(s._rankShift)} 名</span>`;
        } else {
          shiftHtml = `<span class="text-slate-400 font-bold">━ 持平</span>`;
        }

        // Diff score color
        let diffColor = 'text-slate-600';
        let diffPrefix = '';
        if (s._diffAvg > 0) {
          diffColor = 'text-emerald-700 font-bold';
          diffPrefix = '+';
        } else if (s._diffAvg < 0) {
          diffColor = 'text-rose-700 font-bold';
        }

        tr.innerHTML = `
          <td class="py-3 px-3 text-center font-mono font-medium text-slate-600 border-r border-slate-200">${s.seatNo}</td>
          <td class="py-3 px-3 font-semibold text-slate-900 border-r border-slate-200">
            <div>${s.name}</div>
          </td>
          <td class="py-3 px-2 text-center border-r border-slate-200">
            <span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${catMeta.color}">${catMeta.label}</span>
          </td>
          <td class="py-3 px-2 text-center font-mono border-r border-slate-200 bg-blue-50/20">${s._avg1}</td>
          <td class="py-3 px-2 text-center font-mono border-r border-slate-200 bg-blue-50/20">${s.excludeRank ? 'IEP' : (s._rank1 || '—')}</td>
          <td class="py-3 px-2 text-center font-mono font-bold text-emerald-800 border-r border-slate-200 bg-emerald-50/20">${s._avg2}</td>
          <td class="py-3 px-2 text-center font-mono font-bold text-emerald-800 border-r border-slate-200 bg-emerald-50/20">${s.excludeRank ? 'IEP' : (s._rank2 || '—')}</td>
          <td class="py-3 px-2.5 text-center font-mono ${diffColor} border-r border-slate-200 bg-amber-50/30">${diffPrefix}${s._diffAvg}</td>
          <td class="py-3 px-2.5 text-center font-mono ${diffColor} border-r border-slate-200 bg-amber-50/30">${diffPrefix}${s._growthRate}%</td>
          <td class="py-3 px-2 text-center border-r border-slate-200">${shiftHtml}</td>
          <td class="py-2 px-2 border-r border-slate-200 bg-purple-50/10">
            <div class="flex items-center space-x-1">
              <input type="text"
                     value="${s.specialNotes || ''}"
                     placeholder="點擊右側 ✨ AI 生成兩次段考比較分析..."
                     class="w-full text-xs px-2 py-1 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-slate-700"
                     onchange="handleDualAnalysisNoteChange('${s.id}', this.value)"
              >
              <button onclick="generateSingleStudentDualAINote('${s.id}')" title="AI 智慧生成此生兩次段考比較分析" class="px-1.5 py-1 rounded bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold shrink-0 transition active:scale-95">
                ✨
              </button>
            </div>
          </td>
          <td class="py-3 px-2 text-center whitespace-nowrap">
            <button onclick="openStudentGrowthModal('${s.id}')" class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 transition">
              診斷卡 🔍
            </button>
          </td>
        `;

        tbody.appendChild(tr);
      });
    }

    function renderProgressRankTable() {
      const tbody = document.getElementById('progressRankTableBody');
      tbody.innerHTML = '';

      // Sort by progress diffAvg descending
      const progressList = [...appData.students].sort((a, b) => b._diffAvg - a._diffAvg);

      progressList.forEach((s, idx) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition border-b border-slate-200';

        const catMeta = appData.specialCategories[s.specialType] || appData.specialCategories.general;

        let rankBadge = `<span class="font-mono text-slate-700">${idx + 1}</span>`;
        if (idx === 0) rankBadge = `<span class="bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-bold">🥇 榜首</span>`;
        else if (idx === 1) rankBadge = `<span class="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full font-bold">🥈 第二名</span>`;
        else if (idx === 2) rankBadge = `<span class="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full font-bold">🥉 第三名</span>`;

        let progressColor = s._diffAvg >= 0 ? 'text-emerald-700' : 'text-rose-700';
        let progressPrefix = s._diffAvg >= 0 ? '+' : '';

        // Generate tailored encouraging feedback
        let analysisText = '';
        if (s._diffAvg >= 7) {
          analysisText = `<span class="font-bold text-emerald-800">表現大幅突破！</span> 推薦提報全校「學期進步獎」以資表揚激勵`;
        } else if (s._diffAvg > 0) {
          analysisText = `<span class="text-emerald-700 font-medium">穩定向上成長。</span> 學習態度積極，建議鼓勵持續保持`;
        } else if (s._diffAvg === 0) {
          analysisText = `<span class="text-slate-500 font-medium">成績持平。</span> 各學科穩定度高，可挑戰加深加廣題目`;
        } else {
          analysisText = `<span class="text-rose-700 font-medium">稍有滑落 (-${Math.abs(s._diffAvg)}分)。</span> 建議與導師或科任老師面談關心`;
        }

        tr.innerHTML = `
          <td class="py-3 px-3 text-center">${rankBadge}</td>
          <td class="py-3 px-3 text-center font-mono font-medium text-slate-600">${s.seatNo}</td>
          <td class="py-3 px-4 font-bold text-slate-900">${s.name}</td>
          <td class="py-3 px-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${catMeta.color}">${catMeta.label}</span>
          </td>
          <td class="py-3 px-3 text-center font-mono">${s._avg1}</td>
          <td class="py-3 px-3 text-center font-mono font-bold text-slate-900">${s._avg2}</td>
          <td class="py-3 px-3 text-center font-mono font-bold ${progressColor}">${progressPrefix}${s._diffAvg}</td>
          <td class="py-3 px-3 text-center font-mono font-bold ${progressColor}">${progressPrefix}${s._growthRate}%</td>
          <td class="py-3 px-4 text-xs">${analysisText}</td>
        `;

        tbody.appendChild(tr);
      });
    }

    function renderSubjectProgressTable() {
      const subId = document.getElementById('selectCompareSubject').value;
      const subMeta = appData.subjects.find(s => s.id === subId) || appData.subjects[0];
      document.getElementById('currentSubjectRankTitle').textContent = `${subMeta.name}科 進步率排行榜`;

      const tbody = document.getElementById('subjectProgressTableBody');
      tbody.innerHTML = '';

      // Calculate subject diff for each student
      const list = appData.students.map(s => {
        const sc1 = (s.scores1 && s.scores1[subId] !== undefined) ? Number(s.scores1[subId]) : 0;
        const sc2 = (s.scores2 && s.scores2[subId] !== undefined) ? Number(s.scores2[subId]) : 0;
        const diff = sc2 - sc1;
        const rate = sc1 > 0 ? parseFloat(((diff / sc1) * 100).toFixed(1)) : 0;
        return {
          ...s,
          _subScore1: sc1,
          _subScore2: sc2,
          _subDiff: diff,
          _subRate: rate
        };
      });

      list.sort((a, b) => b._subDiff - a._subDiff);

      list.forEach((s, idx) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition border-b border-slate-200';

        const catMeta = appData.specialCategories[s.specialType] || appData.specialCategories.general;

        let badge = `<span class="font-mono text-slate-600">${idx + 1}</span>`;
        if (idx === 0) badge = `<span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">🥇 單科進步王</span>`;
        else if (idx === 1) badge = `<span class="bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded-full">🥈 第二名</span>`;
        else if (idx === 2) badge = `<span class="bg-amber-50 text-amber-900 font-bold px-2 py-0.5 rounded-full">🥉 第三名</span>`;

        let color = s._subDiff > 0 ? 'text-emerald-700' : (s._subDiff < 0 ? 'text-rose-700' : 'text-slate-500');
        let prefix = s._subDiff > 0 ? '+' : '';

        let comment = '';
        if (s._subDiff >= 15) comment = '💥 單科進步超過 15 分，成效卓著！';
        else if (s._subDiff >= 8) comment = '👍 學科理解與答題精準度顯著精進';
        else if (s._subDiff > 0) comment = '🌱 穩步提升中';
        else if (s._subDiff === 0) comment = '維持原先高標水準';
        else comment = '本次題型掌握稍受挫折，建議加強錯題訂正';

        tr.innerHTML = `
          <td class="py-3 px-3 text-center">${badge}</td>
          <td class="py-3 px-3 text-center font-mono font-medium text-slate-600">${s.seatNo}</td>
          <td class="py-3 px-4 font-bold text-slate-900">${s.name}</td>
          <td class="py-3 px-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${catMeta.color}">${catMeta.label}</span>
          </td>
          <td class="py-3 px-3 text-center font-mono">${s._subScore1}</td>
          <td class="py-3 px-3 text-center font-mono font-bold text-slate-900">${s._subScore2}</td>
          <td class="py-3 px-3 text-center font-mono font-bold ${color}">${prefix}${s._subDiff}</td>
          <td class="py-3 px-3 text-center font-mono font-bold ${color}">${prefix}${s._subRate}%</td>
          <td class="py-3 px-4 text-xs">${comment}</td>
        `;

        tbody.appendChild(tr);
      });
    }

    // ========================================================
    // MODAL: Student Growth Diagnostic Card
    // ========================================================
    function openStudentGrowthModal(studentId) {
      computeDualExamRankings();
      const s = appData.students.find(x => x.id === studentId);
      if (!s) return;
      currentGrowthModalStudentId = studentId;

      document.getElementById('growthModalStudentName').textContent = s.name;
      document.getElementById('growthModalSeatNo').textContent = `${s.seatNo} 號`;

      const catMeta = appData.specialCategories[s.specialType] || appData.specialCategories.general;
      document.getElementById('growthModalSpecialBadge').className = `text-xs px-2 py-0.5 rounded-full font-semibold ${catMeta.color}`;
      document.getElementById('growthModalSpecialBadge').textContent = catMeta.label;

      document.getElementById('growthModalAvg1').textContent = s._avg1;
      document.getElementById('growthModalAvg2').textContent = s._avg2;
      
      const diffPrefix = s._diffAvg > 0 ? '+' : '';
      document.getElementById('growthModalDiff').textContent = `${diffPrefix}${s._diffAvg}`;
      document.getElementById('growthModalNotes1').textContent = s.notes1 || '表現平穩，持續保持良好作息。';
      document.getElementById('growthModalNotes2').textContent = s.notes2 || '穩定精進，多方探索成長。';
      document.getElementById('growthModalNotes').textContent = s.specialNotes || '兩次段考持之以恆，建議針對弱項科目持續複習。';

      // Table of subjects
      const tbody = document.getElementById('growthModalSubjectTableBody');
      tbody.innerHTML = '';

      const labels = [];
      const data1 = [];
      const data2 = [];

      appData.subjects.forEach(sub => {
        const val1 = s.scores1 ? Number(s.scores1[sub.id]) || 0 : 0;
        const val2 = s.scores2 ? Number(s.scores2[sub.id]) || 0 : 0;
        const diff = val2 - val1;
        const rate = val1 > 0 ? parseFloat(((diff / val1) * 100).toFixed(1)) : 0;

        labels.push(sub.name);
        data1.push(val1);
        data2.push(val2);

        let statusText = '';
        if (diff > 0) statusText = `<span class="text-emerald-700 font-bold">進步 +${diff}分</span>`;
        else if (diff < 0) statusText = `<span class="text-rose-700 font-bold">退步 ${diff}分</span>`;
        else statusText = `<span class="text-slate-400">持平</span>`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-2.5 px-3 font-semibold text-slate-800">${sub.name}</td>
          <td class="py-2.5 px-3 text-center font-mono">${val1}</td>
          <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-900">${val2}</td>
          <td class="py-2.5 px-3 text-center font-mono font-bold ${diff >= 0 ? 'text-emerald-700' : 'text-rose-700'}">${diff >= 0 ? '+' : ''}${diff}</td>
          <td class="py-2.5 px-3 text-center font-mono font-bold ${diff >= 0 ? 'text-emerald-700' : 'text-rose-700'}">${diff >= 0 ? '+' : ''}${rate}%</td>
          <td class="py-2.5 px-3">${statusText}</td>
        `;
        tbody.appendChild(tr);
      });

      // Render Radar Chart
      renderStudentRadarChart(labels, data1, data2);

      document.getElementById('studentGrowthModal').classList.remove('hidden');
    }

    function closeStudentGrowthModal() {
      document.getElementById('studentGrowthModal').classList.add('hidden');
    }

    function renderStudentRadarChart(labels, data1, data2) {
      if (typeof Chart === 'undefined') return;
      const ctx = document.getElementById('studentRadarChart');
      if (!ctx) return;

      if (studentRadarChartInstance) studentRadarChartInstance.destroy();

      studentRadarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [
            {
              label: '第一次段考',
              data: data1,
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: '#3b82f6',
              pointBackgroundColor: '#3b82f6',
              borderWidth: 2
            },
            {
              label: '第二次段考',
              data: data2,
              backgroundColor: 'rgba(16, 185, 129, 0.25)',
              borderColor: '#10b981',
              pointBackgroundColor: '#10b981',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: { stepSize: 20, font: { size: 10 } }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: { boxWidth: 12, font: { size: 11 } }
            }
          }
        }
      });
    }

    let currentMakeupExamStage = '1'; // '1' or '2'
    let currentMakeupSubjectFilter = 'chi'; // 'chi', 'eng', 'math', 'sci', 'soc', or 'all'

    function handleMakeupScoreChange(studentId, examNum, subId, val) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;

      const prop = (examNum === '1') ? 'makeup1' : 'makeup2';
      if (!student[prop]) student[prop] = {};

      if (val === '' || val === null || val === undefined) {
        delete student[prop][subId];
      } else {
        student[prop][subId] = Math.min(100, Math.max(0, parseFloat(val) || 0));
      }

      saveData(false);
      computeDualExamRankings();
      renderMakeupTab();
      renderGradeTable();
      renderComparisonTab();
      showToast('補考成績已儲存並自動重算月考採計成績！', 'success');
    }

    function getGeneralStudentsNeedingMakeup(examNum = '1', subjectFilter = 'all') {
      const list = [];
      appData.students.forEach(s => {
        // Include general & learning support students who participate in standard regular exams
        const isRegularAssessed = !s.excludeRank && s.specialType !== 'iep' && s.specialType !== 'resource';
        if (!isRegularAssessed) return;

        const scoreObj = (examNum === '1') ? s.scores1 : s.scores2;
        if (!scoreObj) return;

        appData.subjects.forEach(sub => {
          if (subjectFilter !== 'all' && sub.id !== subjectFilter) return;

          const val = scoreObj[sub.id];
          if (val !== undefined && val !== null && val !== '' && Number(val) < 60) {
            const effInfo = getEffectiveSubjectScore(s, examNum, sub.id);
            list.push({
              student: s,
              subject: sub,
              rawScore: Number(val),
              hasMakeup: effInfo.hasMakeup,
              makeupScore: effInfo.makeupScore,
              effectiveScore: effInfo.effective,
              note: effInfo.note
            });
          }
        });
      });
      return list;
    }

    function renderMakeupTab() {
      computeDualExamRankings();

      const e1All = getGeneralStudentsNeedingMakeup('1', 'all');
      const e2All = getGeneralStudentsNeedingMakeup('2', 'all');

      document.getElementById('badgeMakeupCountE1').textContent = `${e1All.length} 科次`;
      document.getElementById('badgeMakeupCountE2').textContent = `${e2All.length} 科次`;

      const isE1 = (currentMakeupExamStage === '1');
      const stageAllList = isE1 ? e1All : e2All;
      document.getElementById('navMakeupCountBadge').textContent = `${stageAllList.length}科次`;

      // Update per-subject badges for the selected exam stage
      appData.subjects.forEach(sub => {
        const subCount = stageAllList.filter(item => item.subject.id === sub.id).length;
        const badgeEl = document.getElementById(`badgeMkSub_${sub.id}`);
        if (badgeEl) {
          badgeEl.textContent = `${subCount}人`;
        }
      });
      const badgeAllEl = document.getElementById('badgeMkSub_all');
      if (badgeAllEl) badgeAllEl.textContent = `${stageAllList.length}科次`;

      // Style Exam Stage Switchers
      const btn1 = document.getElementById('btnMakeupSwitchExam1');
      const btn2 = document.getElementById('btnMakeupSwitchExam2');
      if (isE1) {
        btn1.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 bg-brand-600 text-white shadow-sm';
        btn2.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 text-slate-700 hover:text-slate-900';
      } else {
        btn1.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 text-slate-700 hover:text-slate-900';
        btn2.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 bg-brand-600 text-white shadow-sm';
      }

      // Style 5-Subject Filter Buttons
      document.querySelectorAll('.mk-sub-btn').forEach(btn => {
        const subKey = btn.dataset.mkSub;
        const badge = btn.querySelector('span:last-child');
        if (subKey === currentMakeupSubjectFilter) {
          btn.className = 'mk-sub-btn px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 bg-slate-900 text-white shadow-sm';
          if (badge) badge.className = 'bg-rose-500 text-white px-1.5 py-0.2 rounded-full text-[10px]';
        } else {
          btn.className = 'mk-sub-btn px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200';
          if (badge) badge.className = 'bg-slate-300 text-slate-700 px-1.5 py-0.2 rounded-full text-[10px]';
        }
      });

      const currentSubjObj = appData.subjects.find(s => s.id === currentMakeupSubjectFilter);
      const subjTitle = currentMakeupSubjectFilter === 'all' ? '五科總覽' : `${currentSubjObj ? currentSubjObj.name : ''}科`;
      const examTitle = isE1 ? '第一次段考' : '第二次段考';
      document.getElementById('makeupTableTitle').textContent = `${appData.className} • ${examTitle}【${subjTitle}】未滿 60 分需補考學生表單`;

      const filteredList = getGeneralStudentsNeedingMakeup(currentMakeupExamStage, currentMakeupSubjectFilter);
      const tbody = document.getElementById('makeupTableBody');
      tbody.innerHTML = '';

      if (filteredList.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="10" class="py-12 text-center text-slate-400">
              <svg class="w-10 h-10 mx-auto text-emerald-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ${appData.className} 本次段考【${subjTitle}】全數達 60 分及格標準，無須辦理補考！
            </td>
          </tr>
        `;
        return;
      }

      filteredList.forEach(item => {
        const s = item.student;
        const sub = item.subject;
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition border-b border-slate-200';

        const catMeta = appData.specialCategories[s.specialType] || appData.specialCategories.general;

        let statusBadge = '';
        if (!item.hasMakeup) {
          statusBadge = '<span class="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">待補考</span>';
        } else if (item.effectiveScore >= 60) {
          statusBadge = '<span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">及格採計(60)</span>';
        } else {
          statusBadge = '<span class="bg-rose-100 text-rose-800 border border-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full">未過取最高</span>';
        }

        tr.innerHTML = `
          <td class="py-3 px-3 text-center font-medium text-slate-700">${appData.className}</td>
          <td class="py-3 px-2 text-center font-mono font-medium text-slate-600">${s.seatNo}</td>
          <td class="py-3 px-3 font-bold text-slate-900">
            <div>${s.name}</div>
            <div class="text-[10px] text-slate-400 font-mono">${s.studentId || ''}</div>
          </td>
          <td class="py-3 px-2 text-center">
            <span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${catMeta.color}">${catMeta.label}</span>
          </td>
          <td class="py-3 px-3 text-center font-bold text-brand-800">${sub.name}科</td>
          <td class="py-3 px-3 text-center font-mono font-bold text-rose-700">${item.rawScore}</td>
          <td class="py-3 px-4 text-center bg-amber-50/40">
            <input type="number" 
                   min="0" max="100" 
                   placeholder="填入補考分" 
                   value="${item.makeupScore !== '' ? item.makeupScore : ''}" 
                   class="w-24 text-center py-1 text-xs rounded border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold bg-white"
                   onchange="handleMakeupScoreChange('${s.id}', '${currentMakeupExamStage}', '${sub.id}', this.value)"
            >
          </td>
          <td class="py-3 px-3 text-center font-mono font-bold text-emerald-800 bg-emerald-50/20">
            ${item.effectiveScore !== '' ? item.effectiveScore : '—'}
          </td>
          <td class="py-3 px-4 text-xs text-slate-700">
            ${item.hasMakeup 
              ? `<span class="text-emerald-700 font-medium">✓ ${item.note}</span>` 
              : '<span class="text-slate-400">尚未填入補考成績（暫以原段考分計算）</span>'}
          </td>
          <td class="py-3 px-3 text-center">${statusBadge}</td>
        `;
        tbody.appendChild(tr);
      });
    }


    // ========================================================
    // TAB 3: Special Education Hub
    // ========================================================
    function renderSpecialHub() {
      computeDualExamRankings();
      const allSpecial = appData.students.filter(s => s.specialType && s.specialType !== 'general');
      const totalStudents = appData.students.length;

      document.getElementById('statTotalSpecial').textContent = `${allSpecial.length} 人`;
      document.getElementById('statSpecialPercent').textContent = totalStudents > 0 ? `${Math.round((allSpecial.length / totalStudents) * 100)}%` : '0%';
      document.getElementById('statTotalExcludedRank').textContent = `${allSpecial.filter(s => s.excludeRank).length} 人`;
      document.getElementById('statTotalAccommodations').textContent = `${allSpecial.filter(s => s.specialAccommodations && s.specialAccommodations.length > 0).length} 人`;
      document.getElementById('statTotalSupport').textContent = `${allSpecial.filter(s => s.specialType === 'support').length} 人`;

      const tbody = document.getElementById('specialTableBody');
      tbody.innerHTML = '';

      allSpecial.forEach(student => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition border-b border-slate-200';

        const catMeta = appData.specialCategories[student.specialType] || appData.specialCategories.general;

        let accListHtml = '<span class="text-slate-400 text-xs">常態評量 (無特殊調整)</span>';
        if (student.specialAccommodations && student.specialAccommodations.length > 0) {
          accListHtml = `<div class="flex flex-wrap gap-1">` + 
            student.specialAccommodations.map(item => `<span class="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] px-2 py-0.5 rounded-md font-medium">${item}</span>`).join('') +
            `</div>`;
        }

        const diffPrefix = student._diffAvg >= 0 ? '+' : '';
        const diffColor = student._diffAvg >= 0 ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold';

        tr.innerHTML = `
          <td class="py-3 px-3 text-center font-mono font-medium text-slate-600">${student.seatNo}</td>
          <td class="py-3 px-3 font-bold text-slate-900">${student.name}</td>
          <td class="py-3 px-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${catMeta.color}">${catMeta.label}</span>
          </td>
          <td class="py-3 px-3">${accListHtml}</td>
          <td class="py-3 px-3 text-center">
            ${student.excludeRank 
              ? '<span class="bg-purple-100 text-purple-800 border border-purple-200 text-xs px-2 py-0.5 rounded font-bold">免列常態名次 (IEP)</span>'
              : '<span class="text-slate-600 text-xs">納入常態計分</span>'}
          </td>
          <td class="py-3 px-2 text-center font-mono">${student._avg1}</td>
          <td class="py-3 px-2 text-center font-mono font-bold text-slate-900">${student._avg2}</td>
          <td class="py-3 px-2 text-center font-mono ${diffColor}">${diffPrefix}${student._diffAvg}</td>
          <td class="py-3 px-4 text-xs text-slate-700">${student.specialNotes || '持續落實個別化教育服務追蹤'}</td>
          <td class="py-3 px-3 text-center">
            <button onclick="openSpecialModal('${student.id}')" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition">
              編輯
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    // ========================================================
    // TAB 4: Analytics & Chart.js
    // ========================================================
    function renderStatsView() {
      computeDualExamRankings();

      const students = appData.students;

      // 1. Dual Exam Subject Averages Chart
      const subLabels = appData.subjects.map(s => s.name);
      const avg1List = [];
      const avg2List = [];

      appData.subjects.forEach(sub => {
        const sc1 = students.map(s => s.scores1 ? Number(s.scores1[sub.id]) || 0 : 0);
        const sc2 = students.map(s => s.scores2 ? Number(s.scores2[sub.id]) || 0 : 0);
        const a1 = sc1.length > 0 ? sc1.reduce((a, b) => a + b, 0) / sc1.length : 0;
        const a2 = sc2.length > 0 ? sc2.reduce((a, b) => a + b, 0) / sc2.length : 0;
        avg1List.push(parseFloat(a1.toFixed(1)));
        avg2List.push(parseFloat(a2.toFixed(1)));
      });

      if (subjectChartInstance) subjectChartInstance.destroy();
      const ctx1 = document.getElementById('subjectAvgChart');
      if (ctx1) {
        subjectChartInstance = new Chart(ctx1, {
          type: 'bar',
          data: {
            labels: subLabels,
            datasets: [
              {
                label: '第一次段考各科平均',
                data: avg1List,
                backgroundColor: 'rgba(37, 99, 235, 0.75)',
                borderColor: '#1d4ed8',
                borderWidth: 1,
                borderRadius: 4
              },
              {
                label: '第二次段考各科平均',
                data: avg2List,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#059669',
                borderWidth: 1,
                borderRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 11 } } } }
          }
        });
      }

      // 2. Dual Exam Distribution Comparison Chart (Exam 1 vs Exam 2)
      const tierLabels = ['90-100 (優異)', '80-89 (良好)', '70-79 (中等)', '60-69 (及格)', '59分以下 (待加強)'];
      const tiers1 = { '90-100 (優異)': 0, '80-89 (良好)': 0, '70-79 (中等)': 0, '60-69 (及格)': 0, '59分以下 (待加強)': 0 };
      const tiers2 = { '90-100 (優異)': 0, '80-89 (良好)': 0, '70-79 (中等)': 0, '60-69 (及格)': 0, '59分以下 (待加強)': 0 };

      students.forEach(s => {
        const a1 = s._avg1;
        if (a1 >= 90) tiers1['90-100 (優異)']++;
        else if (a1 >= 80) tiers1['80-89 (良好)']++;
        else if (a1 >= 70) tiers1['70-79 (中等)']++;
        else if (a1 >= 60) tiers1['60-69 (及格)']++;
        else tiers1['59分以下 (待加強)']++;

        const a2 = s._avg2;
        if (a2 >= 90) tiers2['90-100 (優異)']++;
        else if (a2 >= 80) tiers2['80-89 (良好)']++;
        else if (a2 >= 70) tiers2['70-79 (中等)']++;
        else if (a2 >= 60) tiers2['60-69 (及格)']++;
        else tiers2['59分以下 (待加強)']++;
      });

      if (distributionChartInstance) distributionChartInstance.destroy();
      const ctx2 = document.getElementById('gradeDistributionChart');
      if (ctx2) {
        distributionChartInstance = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: tierLabels,
            datasets: [
              {
                label: '第一次段考人數',
                data: tierLabels.map(k => tiers1[k]),
                backgroundColor: 'rgba(59, 130, 246, 0.75)',
                borderColor: '#2563eb',
                borderWidth: 1,
                borderRadius: 4
              },
              {
                label: '第二次段考人數',
                data: tierLabels.map(k => tiers2[k]),
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#059669',
                borderWidth: 1,
                borderRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: { stepSize: 1, precision: 0 }
              }
            },
            plugins: {
              legend: {
                position: 'top',
                labels: { boxWidth: 12, font: { size: 11 } }
              }
            }
          }
        });
      }

      // 3. Five Standards Dual Comparison Table
      renderDualFiveStandardsTable();
    }

    function calculatePercentile(sortedArr, p) {
      if (sortedArr.length === 0) return 0;
      const index = Math.ceil(sortedArr.length * p) - 1;
      return sortedArr[Math.max(0, Math.min(sortedArr.length - 1, index))];
    }

    function renderDualFiveStandardsTable() {
      const tbody = document.getElementById('fiveStandardsTableBody');
      tbody.innerHTML = '';

      appData.subjects.forEach(sub => {
        const sc1 = appData.students.map(s => Number(s.scores1 ? s.scores1[sub.id] : 0)).filter(n => !isNaN(n)).sort((a, b) => a - b);
        const sc2 = appData.students.map(s => Number(s.scores2 ? s.scores2[sub.id] : 0)).filter(n => !isNaN(n)).sort((a, b) => a - b);

        const a1 = sc1.length > 0 ? (sc1.reduce((a, b) => a + b, 0) / sc1.length).toFixed(1) : '0.0';
        const a2 = sc2.length > 0 ? (sc2.reduce((a, b) => a + b, 0) / sc2.length).toFixed(1) : '0.0';
        const diffAvg = (parseFloat(a2) - parseFloat(a1)).toFixed(1);

        const passRate1 = sc1.length > 0 ? Math.round((sc1.filter(v => v >= 60).length / sc1.length) * 100) : 0;
        const passRate2 = sc2.length > 0 ? Math.round((sc2.filter(v => v >= 60).length / sc2.length) * 100) : 0;

        // Row 1: Exam 1
        tbody.innerHTML += `
          <tr class="bg-blue-50/20 border-t border-slate-200">
            <td rowspan="2" class="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">${sub.name}</td>
            <td class="py-2 px-3 text-center text-blue-700 font-semibold border-r border-slate-200">第一次段考</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc1, 0.88)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc1, 0.75)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc1, 0.50)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc1, 0.25)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc1, 0.12)}</td>
            <td class="py-2 px-3 text-center font-mono font-bold">${a1}</td>
            <td class="py-2 px-3 text-center font-mono">${passRate1}%</td>
            <td rowspan="2" class="py-3 px-3 text-center font-mono font-bold border-l border-slate-200 ${diffAvg >= 0 ? 'text-emerald-700' : 'text-rose-700'}">
              ${diffAvg >= 0 ? '↑ +' : '↓ '}${diffAvg} 分<br>
              <span class="text-[10px] font-normal text-slate-500">及格率變動 ${passRate2 - passRate1 >= 0 ? '+' : ''}${passRate2 - passRate1}%</span>
            </td>
          </tr>
          <tr class="bg-emerald-50/20 border-b border-slate-200">
            <td class="py-2 px-3 text-center text-emerald-700 font-semibold border-r border-slate-200">第二次段考</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc2, 0.88)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc2, 0.75)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc2, 0.50)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc2, 0.25)}</td>
            <td class="py-2 px-3 text-center font-mono">${calculatePercentile(sc2, 0.12)}</td>
            <td class="py-2 px-3 text-center font-mono font-bold">${a2}</td>
            <td class="py-2 px-3 text-center font-mono">${passRate2}%</td>
          </tr>
        `;
      });
    }

    // ========================================================
    // TAB 5: Print Hub (Official Formats)
    // ========================================================
    function renderPrintPreview() {
      computeDualExamRankings();
      const format = document.getElementById('printFormatSelect').value;
      const hideSpecial = document.getElementById('chkPrintHideSpecial').checked;
      const previewContainer = document.getElementById('printSheetPreviewContainer');

      let html = '';
      if (format === 'dual-compare-sheet') {
        html = generatePrintDualCompareSheet(hideSpecial);
      } else if (format === 'exam2-roster') {
        html = generatePrintSingleExamRoster('2', '第二次段考', hideSpecial);
      } else if (format === 'exam1-roster') {
        html = generatePrintSingleExamRoster('1', '第一次段考', hideSpecial);
      } else if (format === 'special-roster') {
        html = generatePrintSpecialAssessmentSheet();
      } else if (format === 'individual-exam1-cards') {
        html = generatePrintIndividualExam1Cards();
      } else if (format === 'individual-exam2-cards') {
        html = generatePrintIndividualExam2Cards();
      } else if (format === 'makeup-exam-roster') {
        html = generatePrintMakeupRoster(false);
      } else if (format === 'makeup-exam-roster-subj') {
        html = generatePrintMakeupRoster(true);
      } else {
        html = generatePrintIndividualGrowthCards();
      }

      previewContainer.innerHTML = html;
      document.getElementById('printContainer').innerHTML = html;
    }

    function generatePrintDualCompareSheet(hideSpecial) {
      let rows = '';
      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      list.forEach(s => {
        let specialLabel = '';
        if (!hideSpecial && s.specialType !== 'general') {
          const meta = appData.specialCategories[s.specialType];
          specialLabel = `<span style="color:#5b21b6; font-size:10px;">[${meta ? meta.label : '特教'}]</span>`;
        }

        let shift = s.excludeRank ? 'IEP免列' : (s._rankShift > 0 ? `↑${s._rankShift}` : (s._rankShift < 0 ? `↓${Math.abs(s._rankShift)}` : '━'));

        rows += `
          <tr>
            <td style="text-align:center;">${s.seatNo}</td>
            <td style="font-weight:bold;">${s.name} ${specialLabel}</td>
            <td style="text-align:center;">${s._avg1}</td>
            <td style="text-align:center;">${s.excludeRank ? 'IEP' : (s._rank1 || '—')}</td>
            <td style="text-align:center; font-weight:bold;">${s._avg2}</td>
            <td style="text-align:center; font-weight:bold;">${s.excludeRank ? 'IEP' : (s._rank2 || '—')}</td>
            <td style="text-align:center; font-weight:bold; color:${s._diffAvg >= 0 ? '#047857' : '#b91c1c'};">${s._diffAvg >= 0 ? '+' : ''}${s._diffAvg}</td>
            <td style="text-align:center; font-weight:bold; color:${s._growthRate >= 0 ? '#047857' : '#b91c1c'};">${s._growthRate >= 0 ? '+' : ''}${s._growthRate}%</td>
            <td style="text-align:center;">${shift}</td>
            <td style="font-size:9.5px; color:#334155; line-height:1.35;">
              ${s.notes1 ? `<div><strong>[一段]</strong> ${s.notes1}</div>` : ''}
              ${s.notes2 ? `<div><strong>[二段]</strong> ${s.notes2}</div>` : ''}
              ${(!hideSpecial && s.specialNotes) ? `<div style="color:#4338ca; font-weight:bold;">[綜合比較] ${s.specialNotes}</div>` : ''}
            </td>
          </tr>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black; line-height: 1.4;">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid #000; padding-bottom: 10px;">
            <h1 style="font-size: 20px; font-weight: bold; margin: 0 0 4px 0;">${appData.schoolName}</h1>
            <h2 style="font-size: 16px; font-weight: bold; margin: 0 0 6px 0;">
              ${appData.academicYear}學年度 班級第一次與第二次定期評量學習成長對比分析冊
            </h2>
            <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 8px;">
              <span><strong>班級：</strong>${appData.className}</span>
              <span><strong>導師：</strong>${appData.teacherName}</span>
              <span><strong>全班人數：</strong>${appData.students.length} 人</span>
              <span><strong>製表模式：</strong>${hideSpecial ? '公開張貼版 (隱匿特教身分)' : '行政與特教存查版'}</span>
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 20px;">
            <thead>
              <tr style="background-color: #f1f5f9; border: 1px solid #000;">
                <th style="padding: 5px; border: 1px solid #000; width: 36px;">座號</th>
                <th style="padding: 5px; border: 1px solid #000; width: 85px;">學生姓名</th>
                <th style="padding: 5px; border: 1px solid #000; width: 60px;">一段平均</th>
                <th style="padding: 5px; border: 1px solid #000; width: 60px;">一段名次</th>
                <th style="padding: 5px; border: 1px solid #000; width: 60px;">二段平均</th>
                <th style="padding: 5px; border: 1px solid #000; width: 60px;">二段名次</th>
                <th style="padding: 5px; border: 1px solid #000; width: 65px;">平均差值</th>
                <th style="padding: 5px; border: 1px solid #000; width: 65px;">成長率(%)</th>
                <th style="padding: 5px; border: 1px solid #000; width: 60px;">名次消長</th>
                <th style="padding: 5px; border: 1px solid #000;">學習輔導 / 個別評量備註</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>

          <div style="margin-top: 24px; border-top: 1px dashed #64748b; padding-top: 12px; page-break-inside: avoid;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 10px;">全校行政審查核章：</div>
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 11px;">
              <tr>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>班級導師</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教務組長</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>特教/輔導業務</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教導主任</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>校長核示</strong></td>
              </tr>
            </table>
          </div>
        </div>
      `;
    }

    function generatePrintSingleExamRoster(examNum, examName, hideSpecial) {
      let rows = '';
      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      list.forEach(s => {
        const tot = (examNum === '1') ? s._total1 : s._total2;
        const avg = (examNum === '1') ? s._avg1 : s._avg2;
        const rank = (examNum === '1') ? s._rank1 : s._rank2;

        let specialLabel = '';
        if (!hideSpecial && s.specialType !== 'general') {
          const meta = appData.specialCategories[s.specialType];
          specialLabel = `<span style="color:#5b21b6; font-size:10px;">[${meta ? meta.label : '特教'}]</span>`;
        }

        // Check if student has makeup exam adjustments
        let makeupNotes = [];
        let subCellsHtml = '';
        appData.subjects.forEach(sub => {
          const eff = getEffectiveSubjectScore(s, examNum, sub.id);
          if (eff.hasMakeup) {
            makeupNotes.push(`${sub.name}原${eff.raw}補考${eff.makeupScore}➔計${eff.effective}`);
            subCellsHtml += `<td style="text-align:center; font-weight:bold; color:#047857;">${eff.effective}<span style="font-size:9px; vertical-align:super; color:#b91c1c;">(補)</span></td>`;
          } else {
            subCellsHtml += `<td style="text-align:center;">${eff.raw !== '' ? eff.raw : '—'}</td>`;
          }
        });

        let noteText = (examNum === '1') ? (s.notes1 || '') : (s.notes2 || '');
        if (!noteText && !hideSpecial && s.specialNotes) noteText = s.specialNotes;
        if (makeupNotes.length > 0) {
          noteText = (noteText ? noteText + '；' : '') + '【補考採計】' + makeupNotes.join('、');
        }

        rows += `
          <tr>
            <td style="text-align:center;">${s.seatNo}</td>
            <td style="font-weight:bold;">${s.name} ${specialLabel}</td>
            ${subCellsHtml}
            <td style="text-align:center; font-weight:bold;">${tot}</td>
            <td style="text-align:center; font-weight:bold;">${avg}</td>
            <td style="text-align:center; font-weight:bold;">${s.excludeRank && !hideSpecial ? 'IEP免列' : (rank || '—')}</td>
            <td style="font-size:10px;">${noteText}</td>
          </tr>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black; line-height: 1.4;">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid #000; padding-bottom: 10px;">
            <h1 style="font-size: 20px; font-weight: bold; margin: 0 0 4px 0;">${appData.schoolName}</h1>
            <h2 style="font-size: 16px; font-weight: bold; margin: 0 0 6px 0;">
              ${appData.academicYear}學年度 ${appData.className} ${examName} 正式成績冊
            </h2>
            <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 8px;">
              <span><strong>導師：</strong>${appData.teacherName}</span>
              <span><strong>人數：</strong>${appData.students.length} 人</span>
              <span><strong>製表日期：</strong>${new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 20px;">
            <thead>
              <tr style="background-color: #f1f5f9; border: 1px solid #000;">
                <th style="padding: 5px; border: 1px solid #000; width: 36px;">座號</th>
                <th style="padding: 5px; border: 1px solid #000; width: 85px;">姓名</th>
                <th style="padding: 5px; border: 1px solid #000; width: 45px;">國文</th>
                <th style="padding: 5px; border: 1px solid #000; width: 45px;">英語</th>
                <th style="padding: 5px; border: 1px solid #000; width: 45px;">數學</th>
                <th style="padding: 5px; border: 1px solid #000; width: 45px;">自然</th>
                <th style="padding: 5px; border: 1px solid #000; width: 45px;">社會</th>
                <th style="padding: 5px; border: 1px solid #000; width: 50px;">總分</th>
                <th style="padding: 5px; border: 1px solid #000; width: 50px;">平均</th>
                <th style="padding: 5px; border: 1px solid #000; width: 50px;">排名</th>
                <th style="padding: 5px; border: 1px solid #000;">評量說明</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>

          <div style="margin-top: 24px; border-top: 1px dashed #64748b; padding-top: 12px;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 11px;">
              <tr>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>班級導師</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教務組長</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>特教業務</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教導主任</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>校長核示</strong></td>
              </tr>
            </table>
          </div>
        </div>
      `;
    }

    function generatePrintSpecialAssessmentSheet() {
      const allSpecial = appData.students.filter(s => s.specialType && s.specialType !== 'general');
      let rows = '';

      allSpecial.forEach((s, idx) => {
        const meta = appData.specialCategories[s.specialType] || { label: s.specialType };
        const accStr = (s.specialAccommodations || []).join('、 ') || '一般常態作答';

        rows += `
          <tr>
            <td style="text-align:center;">${idx + 1}</td>
            <td style="text-align:center;">${s.seatNo}</td>
            <td style="font-weight:bold;">${s.name}</td>
            <td style="text-align:center; font-weight:bold;">${meta.label}</td>
            <td>${accStr}</td>
            <td style="text-align:center;">${s.excludeRank ? 'IEP免列常態排' : '納入常態排'}</td>
            <td style="text-align:center;">${s._avg1}</td>
            <td style="text-align:center; font-weight:bold;">${s._avg2}</td>
            <td style="text-align:center; font-weight:bold; color:${s._diffAvg >= 0 ? '#047857' : '#b91c1c'};">${s._diffAvg >= 0 ? '+' : ''}${s._diffAvg}</td>
            <td style="font-size:10px;">${s.specialNotes || '—'}</td>
          </tr>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black; line-height: 1.4;">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid #4338ca; padding-bottom: 10px;">
            <h1 style="font-size: 20px; font-weight: bold; margin: 0 0 4px 0;">${appData.schoolName} 特殊教育推行委員會</h1>
            <h2 style="font-size: 16px; font-weight: bold; color: #4338ca; margin: 0 0 6px 0;">
              ${appData.academicYear}學年度 特殊需求學生兩次段考評量調整與成長備查總表
            </h2>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
            <thead>
              <tr style="background-color: #ede9fe; border: 1px solid #4338ca;">
                <th style="padding: 6px; border: 1px solid #334155; width: 30px;">序</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 36px;">座號</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 75px;">學生姓名</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 80px;">特教身分</th>
                <th style="padding: 6px; border: 1px solid #334155;">核定考場評量調整措施</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 85px;">排名政策</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 50px;">一段平均</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 50px;">二段平均</th>
                <th style="padding: 6px; border: 1px solid #334155; width: 50px;">進步差值</th>
                <th style="padding: 6px; border: 1px solid #334155;">IEP 個別化目標追蹤備註</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>

          <div style="margin-top: 24px; border-top: 1px dashed #64748b; padding-top: 12px; page-break-inside: avoid;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 10px;">特教推行委員會與全校行政審查核章：</div>
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 11px;">
              <tr>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>班級導師</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教務組長</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>特教/輔導業務</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教導主任</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>校長核示</strong></td>
              </tr>
            </table>
          </div>
        </div>
      `;
    }

    function generatePrintMakeupRoster(onlyCurrentSubj = false) {
      const targetExam = currentMakeupExamStage;
      const subFilter = onlyCurrentSubj ? currentMakeupSubjectFilter : 'all';
      const targetList = getGeneralStudentsNeedingMakeup(targetExam, subFilter);
      const examName = (targetExam === '1') ? '第一次段考' : '第二次段考';
      const subObj = appData.subjects.find(s => s.id === subFilter);
      const subTitle = subFilter === 'all' ? '五科彙整總表' : `【${subObj ? subObj.name : ''}科】專表`;

      let rows = '';
      if (targetList.length === 0) {
        rows = `<tr><td colspan="8" style="text-align:center; padding:16px;">本次段考一般生無不及格需補考科目。</td></tr>`;
      } else {
        targetList.forEach((item, idx) => {
          const s = item.student;
          const sub = item.subject;
          rows += `
            <tr>
              <td style="text-align:center;">${idx + 1}</td>
              <td style="text-align:center;">${s.seatNo}</td>
              <td style="font-weight:bold;">${s.name}</td>
              <td style="text-align:center;">${sub.name}</td>
              <td style="text-align:center; color:#b91c1c; font-weight:bold;">${item.rawScore}</td>
              <td style="text-align:center; font-weight:bold;">${item.makeupScore !== '' ? item.makeupScore : '____'}</td>
              <td style="text-align:center; font-weight:bold; color:#047857;">${item.effectiveScore !== '' ? item.effectiveScore : '____'}</td>
              <td style="font-size:10px;">${item.note || '未登錄（依規補考>60分以60分計，<60分取最高分計）'}</td>
            </tr>
          `;
        });
      }

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black; line-height: 1.4;">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid #000; padding-bottom: 10px;">
            <h1 style="font-size: 20px; font-weight: bold; margin: 0 0 4px 0;">${appData.schoolName}</h1>
            <h2 style="font-size: 16px; font-weight: bold; margin: 0 0 6px 0;">
              ${appData.academicYear}學年度 ${appData.className} ${examName} 未滿60分補考名冊與採計紀錄表 (${subTitle})
            </h2>
            <div style="font-size: 11px; color: #475569; margin-top: 4px;">
              法規依據：補考成績超過60分者，以60分計算；未超過60分者，與原月考成績比較，以低於60分之最高分數計算。
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
            <thead>
              <tr style="background-color: #f8fafc; border: 1px solid #000;">
                <th style="padding: 6px; border: 1px solid #000; width: 36px;">序</th>
                <th style="padding: 6px; border: 1px solid #000; width: 45px;">座號</th>
                <th style="padding: 6px; border: 1px solid #000; width: 85px;">學生姓名</th>
                <th style="padding: 6px; border: 1px solid #000; width: 70px;">補考學科</th>
                <th style="padding: 6px; border: 1px solid #000; width: 75px;">段考原成績</th>
                <th style="padding: 6px; border: 1px solid #000; width: 75px;">補考成績</th>
                <th style="padding: 6px; border: 1px solid #000; width: 85px;">折算採計分數</th>
                <th style="padding: 6px; border: 1px solid #000;">採計法規備註與說明</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>

          <div style="margin-top: 24px; border-top: 1px dashed #64748b; padding-top: 12px; page-break-inside: avoid;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 10px;">行政審查核章：</div>
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 11px;">
              <tr>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>班級導師</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教務組長</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>特教/輔導業務</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>教導主任</strong></td>
                <td style="border: 1px solid #334155; padding: 8px; width: 20%; height: 50px; vertical-align: top;"><strong>校長核示</strong></td>
              </tr>
            </table>
          </div>
        </div>
      `;
    }

    function generatePrintIndividualExam1Cards() {
      let cardsHtml = '';
      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      list.forEach(s => {
        const isSpecial = s.specialType && s.specialType !== 'general';
        const rankText = s.excludeRank ? 'IEP獨立評量 (免常態排)' : `${s._rank1 || '—'} / ${list.length}`;

        cardsHtml += `
          <div style="border: 1.5px solid #1e293b; border-radius: 8px; padding: 12px; margin-bottom: 14px; page-break-inside: avoid; background-color: white;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">
              <div>
                <span style="font-size: 13px; font-weight: bold;">${appData.schoolName} - 第一次段考學生成績通知單</span>
                <span style="font-size: 10px; color: #475569; margin-left: 8px;">(${appData.academicYear} 定期成績評量)</span>
              </div>
              <div style="font-size: 12px; font-weight: bold;">
                ${appData.className} 座號：${s.seatNo} 姓名：${s.name}
              </div>
            </div>

            ${(() => {
              let subTds = '';
              let mkTips = [];
              appData.subjects.forEach(sub => {
                const eff = getEffectiveSubjectScore(s, '1', sub.id);
                if (eff.hasMakeup) {
                  mkTips.push(`${sub.name}科原始 ${eff.raw}分，補考 ${eff.makeupScore}分 ➔ 依規折算採計 ${eff.effective}分`);
                  subTds += `<td style="border: 1px solid #94a3b8; padding: 6px; font-weight:bold; color:#047857;">${eff.effective}<span style="font-size:9px; vertical-align:super; color:#b91c1c;">(補)</span></td>`;
                } else {
                  subTds += `<td style="border: 1px solid #94a3b8; padding: 6px;">${eff.raw !== '' ? eff.raw : '—'}</td>`;
                }
              });
              const mkDesc = mkTips.length > 0 ? `<div style="margin-top:2px; font-size:10px; color:#047857; font-weight:bold;">【補考折算】${mkTips.join('；')}</div>` : '';

              return `
                <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 8px; text-align: center;">
                  <tr style="background-color: #f8fafc;">
                    <th style="border: 1px solid #94a3b8; padding: 5px;">國文</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">英語</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">數學</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">自然</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">社會</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">總分</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">平均</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">班排名</th>
                  </tr>
                  <tr>
                    ${subTds}
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold;">${s._total1}</td>
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold; color: #1e40af;">${s._avg1}</td>
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold;">${rankText}</td>
                  </tr>
                </table>

                <div style="display: flex; justify-content: space-between; font-size: 11px; align-items: flex-end;">
                  <div style="flex: 1; margin-right: 16px;">
                    <div style="color: #475569;">
                      <strong>第一次段考導師評語：</strong>
                      ${s.notes1 || '學習態度踏實，請家長於平日多予鼓勵肯定，共同陪伴孩子穩健進步。'}
                      ${mkDesc}
                    </div>
                  </div>
              `;
            })()}
              <div style="border: 1px dashed #64748b; padding: 4px 10px; text-align: center; width: 130px;">
                <div style="font-size: 10px; color: #64748b;">家長簽名簽章：</div>
                <div style="height: 18px;"></div>
              </div>
            </div>
          </div>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black;">
          <h2 style="text-align: center; font-size: 15px; font-weight: bold; margin-bottom: 14px;">
            ${appData.schoolName} ${appData.className} 第一次段考學生成績通知單 (批次列印聯)
          </h2>
          ${cardsHtml}
        </div>
      `;
    }

    function generatePrintIndividualExam2Cards() {
      let cardsHtml = '';
      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      list.forEach(s => {
        const rankText = s.excludeRank ? 'IEP獨立評量 (免常態排)' : `${s._rank2 || '—'} / ${list.length}`;

        cardsHtml += `
          <div style="border: 1.5px solid #1e293b; border-radius: 8px; padding: 12px; margin-bottom: 14px; page-break-inside: avoid; background-color: white;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">
              <div>
                <span style="font-size: 13px; font-weight: bold;">${appData.schoolName} - 第二次段考學生成績通知單</span>
                <span style="font-size: 10px; color: #475569; margin-left: 8px;">(${appData.academicYear} 定期成績評量)</span>
              </div>
              <div style="font-size: 12px; font-weight: bold;">
                ${appData.className} 座號：${s.seatNo} 姓名：${s.name}
              </div>
            </div>

            ${(() => {
              let subTds = '';
              let mkTips = [];
              appData.subjects.forEach(sub => {
                const eff = getEffectiveSubjectScore(s, '2', sub.id);
                if (eff.hasMakeup) {
                  mkTips.push(`${sub.name}科原始 ${eff.raw}分，補考 ${eff.makeupScore}分 ➔ 依規折算採計 ${eff.effective}分`);
                  subTds += `<td style="border: 1px solid #94a3b8; padding: 6px; font-weight:bold; color:#047857;">${eff.effective}<span style="font-size:9px; vertical-align:super; color:#b91c1c;">(補)</span></td>`;
                } else {
                  subTds += `<td style="border: 1px solid #94a3b8; padding: 6px;">${eff.raw !== '' ? eff.raw : '—'}</td>`;
                }
              });
              const mkDesc = mkTips.length > 0 ? `<div style="margin-top:2px; font-size:10px; color:#047857; font-weight:bold;">【補考折算】${mkTips.join('；')}</div>` : '';

              return `
                <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 8px; text-align: center;">
                  <tr style="background-color: #f8fafc;">
                    <th style="border: 1px solid #94a3b8; padding: 5px;">國文</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">英語</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">數學</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">自然</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px;">社會</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">總分</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">平均</th>
                    <th style="border: 1px solid #94a3b8; padding: 5px; background-color: #e2e8f0;">班排名</th>
                  </tr>
                  <tr>
                    ${subTds}
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold;">${s._total2}</td>
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold; color: #15803d;">${s._avg2}</td>
                    <td style="border: 1px solid #94a3b8; padding: 6px; font-weight: bold;">${rankText}</td>
                  </tr>
                </table>

                <div style="display: flex; justify-content: space-between; font-size: 11px; align-items: flex-end;">
                  <div style="flex: 1; margin-right: 16px;">
                    <div style="color: #475569;">
                      <strong>第二次段考導師評語：</strong>
                      ${s.notes2 || '持續保持良好學習習慣，多方探索成長。'}
                      ${mkDesc}
                    </div>
                  </div>
              `;
            })()}
              <div style="border: 1px dashed #64748b; padding: 4px 10px; text-align: center; width: 130px;">
                <div style="font-size: 10px; color: #64748b;">家長簽名簽章：</div>
                <div style="height: 18px;"></div>
              </div>
            </div>
          </div>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black;">
          <h2 style="text-align: center; font-size: 15px; font-weight: bold; margin-bottom: 14px;">
            ${appData.schoolName} ${appData.className} 第二次段考學生成績通知單 (批次列印聯)
          </h2>
          ${cardsHtml}
        </div>
      `;
    }

    function generatePrintIndividualGrowthCards() {
      let cardsHtml = '';
      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);

      list.forEach(s => {
        const isSpecial = s.specialType && s.specialType !== 'general';
        const rankText = s.excludeRank ? 'IEP獨立評量' : `${s._rank2 || '—'} / ${list.length}`;
        const diffPrefix = s._diffAvg >= 0 ? '+' : '';

        cardsHtml += `
          <div style="border: 1.5px solid #1e293b; border-radius: 8px; padding: 12px; margin-bottom: 14px; page-break-inside: avoid; background-color: white;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">
              <div>
                <span style="font-size: 13px; font-weight: bold;">${appData.schoolName} - 學生個人學習成長通知單</span>
                <span style="font-size: 10px; color: #475569; margin-left: 8px;">(${appData.academicYear} 兩次定期評量成長診斷)</span>
              </div>
              <div style="font-size: 12px; font-weight: bold;">
                ${appData.className} 座號：${s.seatNo} 姓名：${s.name}
              </div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; margin-bottom: 8px; text-align: center;">
              <tr style="background-color: #f8fafc;">
                <th style="border: 1px solid #94a3b8; padding: 4px;">段考次別</th>
                <th style="border: 1px solid #94a3b8; padding: 4px;">國文</th>
                <th style="border: 1px solid #94a3b8; padding: 4px;">英語</th>
                <th style="border: 1px solid #94a3b8; padding: 4px;">數學</th>
                <th style="border: 1px solid #94a3b8; padding: 4px;">自然</th>
                <th style="border: 1px solid #94a3b8; padding: 4px;">社會</th>
                <th style="border: 1px solid #94a3b8; padding: 4px; background-color: #e2e8f0;">總分</th>
                <th style="border: 1px solid #94a3b8; padding: 4px; background-color: #e2e8f0;">平均</th>
                <th style="border: 1px solid #94a3b8; padding: 4px; background-color: #e2e8f0;">名次</th>
              </tr>
              <tr>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold;">第一次段考</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores1.chi ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores1.eng ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores1.math ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores1.sci ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores1.soc ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s._total1}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold;">${s._avg1}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.excludeRank ? 'IEP' : s._rank1}</td>
              </tr>
              <tr style="background-color: #f0fdf4;">
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold; color:#166534;">第二次段考</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores2.chi ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores2.eng ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores2.math ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores2.sci ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${s.scores2.soc ?? '—'}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold;">${s._total2}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold; color:#15803d;">${s._avg2}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold;">${rankText}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold; color:#b45309;">成長消長 (+/-)</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${((Number(s.scores2.chi)||0) - (Number(s.scores1.chi)||0)) >= 0 ? '+' : ''}${(Number(s.scores2.chi)||0) - (Number(s.scores1.chi)||0)}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${((Number(s.scores2.eng)||0) - (Number(s.scores1.eng)||0)) >= 0 ? '+' : ''}${(Number(s.scores2.eng)||0) - (Number(s.scores1.eng)||0)}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${((Number(s.scores2.math)||0) - (Number(s.scores1.math)||0)) >= 0 ? '+' : ''}${(Number(s.scores2.math)||0) - (Number(s.scores1.math)||0)}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${((Number(s.scores2.sci)||0) - (Number(s.scores1.sci)||0)) >= 0 ? '+' : ''}${(Number(s.scores2.sci)||0) - (Number(s.scores1.sci)||0)}</td>
                <td style="border: 1px solid #94a3b8; padding: 4px;">${((Number(s.scores2.soc)||0) - (Number(s.scores1.soc)||0)) >= 0 ? '+' : ''}${(Number(s.scores2.soc)||0) - (Number(s.scores1.soc)||0)}</td>
                <td colspan="2" style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold; color:#b45309;">平均消長: ${diffPrefix}${s._diffAvg} 分 (成長率 ${diffPrefix}${s._growthRate}%)</td>
                <td style="border: 1px solid #94a3b8; padding: 4px; font-weight:bold;">${s.excludeRank ? 'IEP' : (s._rankShift > 0 ? `升${s._rankShift}名` : (s._rankShift < 0 ? `降${Math.abs(s._rankShift)}名` : '持平'))}</td>
              </tr>
            </table>

            <div style="display: flex; justify-content: space-between; font-size: 10.5px; align-items: flex-end;">
              <div style="flex: 1; margin-right: 16px; line-height: 1.4;">
                <div style="color: #1e3a8a;"><strong>📘 第一次段考評語：</strong>${s.notes1 || '表現平穩，持續努力。'}</div>
                <div style="color: #166534;"><strong>📗 第二次段考評語：</strong>${s.notes2 || '穩定精進，值得肯定。'}</div>
                <div style="color: #4338ca; margin-top: 2px;"><strong>📊 兩次段考綜合比較分析：</strong>${s.specialNotes || '持續培養主動探究精神與閱讀習慣，在家多予肯定！'}</div>
              </div>
              <div style="border: 1px dashed #64748b; padding: 4px 10px; text-align: center; width: 130px;">
                <div style="font-size: 10px; color: #64748b;">家長簽閱簽名：</div>
                <div style="height: 18px;"></div>
              </div>
            </div>
          </div>
        `;
      });

      return `
        <div style="font-family: 'Noto Sans TC', sans-serif; color: black;">
          <h2 style="text-align: center; font-size: 15px; font-weight: bold; margin-bottom: 14px;">
            ${appData.schoolName} ${appData.className} 雙次段考學習成長通知單 (批次列印)
          </h2>
          ${cardsHtml}
        </div>
      `;
    }

    // ========================================================
    // Modal Handlers
    // ========================================================
    function openSpecialModal(studentId) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;

      editingStudentId = studentId;
      document.getElementById('modalStudentName').textContent = student.name;
      document.getElementById('modalStudentClassSeat').textContent = `${appData.className} ${student.seatNo}號`;

      const radio = document.querySelector(`input[name="modalSpecialType"][value="${student.specialType || 'general'}"]`);
      if (radio) radio.checked = true;

      const accList = student.specialAccommodations || [];
      document.getElementById('chkAccTime').checked = accList.some(item => item.includes('延長'));
      document.getElementById('chkAccRead').checked = accList.some(item => item.includes('報讀'));
      document.getElementById('chkAccFont').checked = accList.some(item => item.includes('放大'));
      document.getElementById('chkAccRoom').checked = accList.some(item => item.includes('考場'));
      document.getElementById('chkAccOral').checked = accList.some(item => item.includes('口語'));
      document.getElementById('chkAccCustom').checked = accList.some(item => item.includes('個別化'));

      document.getElementById('modalExcludeRank').checked = !!student.excludeRank;
      document.getElementById('modalNotes1').value = student.notes1 || '';
      document.getElementById('modalNotes2').value = student.notes2 || '';
      document.getElementById('modalSpecialNotes').value = student.specialNotes || '';

      document.getElementById('specialStudentModal').classList.remove('hidden');
    }

    function closeSpecialModal() {
      document.getElementById('specialStudentModal').classList.add('hidden');
      editingStudentId = null;
    }

    function saveSpecialModalData() {
      if (!editingStudentId) return;
      const student = appData.students.find(s => s.id === editingStudentId);
      if (!student) return;

      student.specialType = document.querySelector('input[name="modalSpecialType"]:checked').value;

      const accs = [];
      if (document.getElementById('chkAccTime').checked) accs.push('延長作答時間(20分鐘)');
      if (document.getElementById('chkAccRead').checked) accs.push('試卷報讀/語音輔助');
      if (document.getElementById('chkAccFont').checked) accs.push('放大字體試卷(A3/24pt)');
      if (document.getElementById('chkAccRoom').checked) accs.push('獨立抽離考場');
      if (document.getElementById('chkAccOral').checked) accs.push('口語作答/電腦作答');
      if (document.getElementById('chkAccCustom').checked) accs.push('個別化評量目標試卷');

      student.specialAccommodations = accs;
      student.excludeRank = document.getElementById('modalExcludeRank').checked;
      student.notes1 = document.getElementById('modalNotes1').value.trim();
      student.notes2 = document.getElementById('modalNotes2').value.trim();
      student.specialNotes = document.getElementById('modalSpecialNotes').value.trim();

      saveData(false);
      closeSpecialModal();
      computeDualExamRankings();
      renderGradeTable();
      renderSpecialHub();
      updateSchoolHeader();
      showToast(`已成功更新 ${student.name} 的特教評量設定！`, 'success');
    }

    function openAddStudentModal() {
      const existingSeats = appData.students.map(s => s.seatNo);
      const nextSeat = existingSeats.length > 0 ? Math.max(...existingSeats) + 1 : 1;
      document.getElementById('modalAddSeatNo').value = nextSeat;
      document.getElementById('modalAddStudentId').value = `${appData.academicYear}${String(nextSeat).padStart(3, '0')}`;
      document.getElementById('modalAddName').value = '';
      document.getElementById('modalAddSpecialType').value = 'general';

      document.getElementById('studentEditModal').classList.remove('hidden');
    }

    function closeAddStudentModal() {
      document.getElementById('studentEditModal').classList.add('hidden');
    }

    function confirmAddStudent() {
      const seatNo = parseInt(document.getElementById('modalAddSeatNo').value, 10);
      const studentId = document.getElementById('modalAddStudentId').value.trim();
      const name = document.getElementById('modalAddName').value.trim();
      const specialType = document.getElementById('modalAddSpecialType').value;

      if (!name) {
        showToast('請輸入學生姓名！', 'warning');
        return;
      }
      if (!seatNo || seatNo < 1) {
        showToast('請輸入有效座號！', 'warning');
        return;
      }

      const newStudent = {
        id: `s_${Date.now()}`,
        seatNo,
        studentId: studentId || `${appData.academicYear}${String(seatNo).padStart(3, '0')}`,
        name,
        specialType,
        specialAccommodations: specialType === 'resource' ? ['延長作答時間(20分鐘)'] : [],
        excludeRank: (specialType === 'iep' || specialType === 'resource'),
        scores1: { chi: '', eng: '', math: '', sci: '', soc: '' },
        scores2: { chi: '', eng: '', math: '', sci: '', soc: '' },
        specialNotes: specialType !== 'general' ? '新註記特教/學習扶助個案' : ''
      };

      appData.students.push(newStudent);
      saveData(false);
      closeAddStudentModal();
      
      computeDualExamRankings();
      renderGradeTable();
      updateSchoolHeader();
      showToast(`已成功新增學生：${name}`, 'success');
    }

    function handleDeleteStudent(studentId) {
      const student = appData.students.find(s => s.id === studentId);
      if (!student) return;

      showConfirmModal(
        '確認刪除學生資料',
        `確定要刪除學生「${student.name} (座號 ${student.seatNo})」嗎？此動作將同時清除其兩次段考記錄。`,
        () => {
          appData.students = appData.students.filter(s => s.id !== studentId);
          saveData(false);
          computeDualExamRankings();
          renderGradeTable();
          updateSchoolHeader();
          showToast(`已刪除學生：${student.name}`, 'info');
        }
      );
    }

    // ========================================================
    // Sample Download & Batch Class Import
    // ========================================================
    function downloadSampleCSV() {
      let csv = "﻿"; // UTF-8 BOM
      csv += "座號,姓名,學號,特教身分,考場調整措施,免常態排名,一段國文,一段英語,一段數學,一段自然,一段社會,二段國文,二段英語,二段數學,二段自然,二段社會,第一次段考導師評語,第二次段考導師評語,兩次段考綜合比較分析\n";
      csv += '1,陳小明,115001,一般生,,否,85,82,78,80,84,88,86,85,84,90,一段文科基礎穩固,二段數學顯著提升,兩次段考全面穩定進步\n';
      csv += '2,林小華,115002,資源班,"延長作答時間(20分鐘); 試卷報讀",是,58,52,48,55,60,66,60,58,62,68,配合延長時間耐心作答,多科突破及格門檻,落實考場調整成效佳\n';
      csv += '3,黃小美,115003,學習扶助,,否,60,55,50,62,65,70,64,62,68,72,英數基礎尚待加強,全科順利達及格標準,參加學習扶助進步明顯\n';
      csv += '4,王大同,115004,一般生,,否,75,70,68,74,78,78,74,72,76,80,各科表現平穩,成績穩健上揚,維持良好複習作息\n';
      csv += '5,張小莉,115005,特教生,"獨立抽離考場; 放大字體試卷",是,65,60,55,62,66,72,68,64,66,70,放大卷作答順暢,五科全數及格,個別化學習目標達成\n';

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `班級學生名冊與雙次段考匯入範例檔.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast('已下載班級匯入範例檔 (.csv / Excel相容)！', 'success');
    }

    function downloadSampleTXT() {
      let txt = "座號\t姓名\t學號\t特教身分\t考場調整措施\t免常態排名\t一段國文\t一段英語\t一段數學\t一段自然\t一段社會\t二段國文\t二段英語\t二段數學\t二段自然\t二段社會\t第一次段考導師評語\t第二次段考導師評語\t兩次段考綜合比較分析\n";
      txt += "1\t陳小明\t115001\t一般生\t\t否\t85\t82\t78\t80\t84\t88\t86\t85\t84\t90\t一段文科基礎穩固\t二段數學顯著提升\t兩次段考全面穩定進步\n";
      txt += "2\t林小華\t115002\t資源班\t延長作答時間; 試卷報讀\t是\t58\t52\t48\t55\t60\t66\t60\t58\t62\t68\t配合延長時間耐心作答\t多科突破及格門檻\t落實考場調整成效佳\n";
      txt += "3\t黃小美\t115003\t學習扶助\t\t否\t60\t55\t50\t62\t65\t70\t64\t62\t68\t72\t英數基礎尚待加強\t全科順利達及格標準\t參加學習扶助進步明顯\n";
      txt += "4\t王大同\t115004\t一般生\t\t否\t75\t70\t68\t74\t78\t78\t74\t72\t76\t80\t各科表現平穩\t成績穩健上揚\t維持良好複習作息\n";
      txt += "5\t張小莉\t115005\t特教生\t獨立抽離考場; 放大字體試卷\t是\t65\t60\t55\t62\t66\t72\t68\t64\t66\t70\t放大卷作答順暢\t五科全數及格\t個別化學習目標達成\n";

      const blob = new Blob([txt], { type: 'text/plain;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `班級學生名冊與雙次段考匯入範例檔.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast('已下載純文字範例檔 (.txt)！', 'success');
    }

    function parseCSVLine(line) {
      const result = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if ((char === ',' || char === '\t') && !inQuotes) {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim());
      return result;
    }

    function handleImportClassFile(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const rawText = e.target.result;
          const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
          if (lines.length < 2) {
            showToast('檔案內容為空或無足夠行數！', 'warning');
            return;
          }

          const parsedStudents = [];
          // Skip header row
          for (let i = 1; i < lines.length; i++) {
            const cols = parseCSVLine(lines[i]);
            if (cols.length < 2) continue;

            const seatNo = parseInt(cols[0], 10) || i;
            const name = cols[1];
            if (!name) continue;

            const studentId = cols[2] || `${appData.academicYear}${String(seatNo).padStart(3, '0')}`;
            
            // Special type mapping
            let spType = 'general';
            const rawSp = cols[3] || '';
            if (rawSp.includes('資源')) spType = 'resource';
            else if (rawSp.includes('IEP') || rawSp.includes('特教')) spType = 'iep';
            else if (rawSp.includes('扶助') || rawSp.includes('補救')) spType = 'support';
            else if (rawSp.includes('身障') || rawSp.includes('障礙')) spType = 'disability';
            else if (rawSp.includes('資優')) spType = 'gifted';

            // Accommodations
            const rawAcc = cols[4] || '';
            const accList = [];
            if (rawAcc.includes('延長')) accList.push('延長作答時間(20分鐘)');
            if (rawAcc.includes('報讀')) accList.push('試卷報讀/語音輔助');
            if (rawAcc.includes('放大')) accList.push('放大字體試卷(A3/24pt)');
            if (rawAcc.includes('抽離') || rawAcc.includes('考場')) accList.push('獨立抽離考場');
            if (rawAcc.includes('口語') || rawAcc.includes('電腦')) accList.push('口語作答/電腦作答');

            // Exclude Rank
            const rawEx = cols[5] || '';
            const excludeRank = (rawEx === '是' || rawEx.toLowerCase() === 'true' || spType === 'iep' || spType === 'resource');

            // Exam 1 Scores
            const s1 = {
              chi: cols[6] !== undefined && cols[6] !== '' ? Number(cols[6]) : '',
              eng: cols[7] !== undefined && cols[7] !== '' ? Number(cols[7]) : '',
              math: cols[8] !== undefined && cols[8] !== '' ? Number(cols[8]) : '',
              sci: cols[9] !== undefined && cols[9] !== '' ? Number(cols[9]) : '',
              soc: cols[10] !== undefined && cols[10] !== '' ? Number(cols[10]) : ''
            };

            // Exam 2 Scores
            const s2 = {
              chi: cols[11] !== undefined && cols[11] !== '' ? Number(cols[11]) : '',
              eng: cols[12] !== undefined && cols[12] !== '' ? Number(cols[12]) : '',
              math: cols[13] !== undefined && cols[13] !== '' ? Number(cols[13]) : '',
              sci: cols[14] !== undefined && cols[14] !== '' ? Number(cols[14]) : '',
              soc: cols[15] !== undefined && cols[15] !== '' ? Number(cols[15]) : ''
            };

            const notes1 = cols[16] || '';
            const notes2 = cols[17] || '';
            const specialNotes = cols[18] || cols[16] || (spType !== 'general' ? '個別化學習追蹤' : '');

            parsedStudents.push({
              id: `s_${Date.now()}_${seatNo}`,
              seatNo,
              studentId,
              name,
              specialType: spType,
              specialAccommodations: accList,
              excludeRank,
              scores1: s1,
              scores2: s2,
              notes1,
              notes2,
              specialNotes
            });
          }

          if (parsedStudents.length > 0) {
            appData.students = parsedStudents;
            saveData(false);
            initApp();
            showToast(`成功匯入 ${parsedStudents.length} 位學生名冊與段考成績！`, 'success');
          } else {
            showToast('匯入失敗：未讀取到有效的學生資料，請確認檔案格式！', 'error');
          }
        } catch (err) {
          console.error(err);
          showToast('匯入解析失敗，請確認檔案是否符合範例格式！', 'error');
        }
      };
      reader.readAsText(file, 'utf-8');
      event.target.value = '';
    }

    // ========================================================
    // CSV & File Export / Import
    // ========================================================
    function exportDualCompareCSV() {
      computeDualExamRankings();
      let csv = "\uFEFF"; // UTF-8 BOM
      csv += `學校,${appData.schoolName},班級,${appData.className},導師,${appData.teacherName}\n`;
      csv += `報表,第二次段考與第一次段考學習進步對比分析表\n\n`;

      csv += "座號,姓名,學號,特教身分,免常態排,一段平均,一段名次,二段平均,二段名次,平均差值,進步率(%),名次消長,國文一段,國文二段,英語一段,英語二段,數學一段,數學二段,自然一段,自然二段,社會一段,社會二段,第一次段考導師評語,第二次段考導師評語,兩次段考綜合比較與輔導分析\n";

      const list = [...appData.students].sort((a, b) => a.seatNo - b.seatNo);
      list.forEach(s => {
        const catMeta = appData.specialCategories[s.specialType] || { label: '一般生' };
        const shiftStr = s.excludeRank ? 'IEP' : (s._rankShift > 0 ? `+${s._rankShift}` : s._rankShift);

        csv += `"${s.seatNo}","${s.name}","${s.studentId || ''}","${catMeta.label}","${s.excludeRank ? '是' : '否'}",${s._avg1},"${s.excludeRank ? 'IEP' : s._rank1}",${s._avg2},"${s.excludeRank ? 'IEP' : s._rank2}",${s._diffAvg},"${s._growthRate}%","${shiftStr}",${s.scores1.chi || 0},${s.scores2.chi || 0},${s.scores1.eng || 0},${s.scores2.eng || 0},${s.scores1.math || 0},${s.scores2.math || 0},${s.scores1.sci || 0},${s.scores2.sci || 0},${s.scores1.soc || 0},${s.scores2.soc || 0},"${s.notes1 || ''}","${s.notes2 || ''}","${s.specialNotes || ''}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${appData.className}_兩次段考學習進步對照表.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast('兩次段考對比分析 CSV 已匯出 (Excel 相容)！', 'success');
    }

    function exportMakeupCSV() {
      computeDualExamRankings();
      let csv = "﻿"; // UTF-8 BOM
      csv += `學校,${appData.schoolName},班級,${appData.className},導師,${appData.teacherName}\n`;
      csv += `報表,一般生月段考不及格需補考名冊與成績採計清冊\n`;
      csv += `備註,依教育部法規：補考>60分以60分計；補考<60分與原成績取高計\n\n`;

      csv += "段考次別,座號,姓名,學號,需補考學科,段考原成績,補考成績,折算採計成績,採計法規備註\n";

      ['1', '2'].forEach(examNum => {
        const examName = (examNum === '1') ? '第一次段考' : '第二次段考';
        const list = getGeneralStudentsNeedingMakeup(examNum);
        list.forEach(item => {
          csv += `"${examName}","${item.student.seatNo}","${item.student.name}","${item.student.studentId || ''}","${item.subject.name}",${item.rawScore},${item.makeupScore !== '' ? item.makeupScore : '""'},${item.effectiveScore !== '' ? item.effectiveScore : '""'},"${item.note || '尚未登錄補考成績'}"\n`;
        });
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${appData.className}_一般生需補考名冊與採計紀錄表.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast('需補考名冊 CSV 已匯出 (Excel 相容)！', 'success');
    }

    function exportSpecialCSV() {
      computeDualExamRankings();
      const allSpecial = appData.students.filter(s => s.specialType && s.specialType !== 'general');
      let csv = "\uFEFF";
      csv += `學校,${appData.schoolName},班級,${appData.className}\n`;
      csv += `報表,特殊需求學生兩次定期評量學習成長清冊\n\n`;

      csv += "座號,姓名,特教身分,核定調整措施,免常態排,一段平均,二段平均,平均差值,個別化教育追蹤備註\n";

      allSpecial.forEach(s => {
        const catMeta = appData.specialCategories[s.specialType] || { label: s.specialType };
        const acc = (s.specialAccommodations || []).join('; ');
        csv += `"${s.seatNo}","${s.name}","${catMeta.label}","${acc}","${s.excludeRank ? '是' : '否'}",${s._avg1},${s._avg2},${s._diffAvg},"${s.specialNotes || ''}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${appData.className}_特殊生評量追蹤表.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast('特殊生評量追蹤表 CSV 已匯出！', 'success');
    }

    function downloadSourceHtml() {
      const fullHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `school_grade_system_${appData.schoolName}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast('已開始下載完整系統網頁原始碼 (.html)！', 'success');
    }

    function exportJSONBackup() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `段考成績備份_${appData.schoolName}_${appData.className}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('完整資料庫備份 JSON 已開始下載！', 'success');
    }

    function handleImportJSON(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed.schoolName && Array.isArray(parsed.students)) {
            appData = parsed;
            saveData(false);
            initApp();
            showToast('備份資料還原成功！成績與對照資料已同步。', 'success');
          } else {
            showToast('匯入失敗：檔案格式不符合系統資料結構！', 'error');
          }
        } catch (err) {
          showToast('JSON 解析錯誤，請檢查檔案完整性！', 'error');
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    // ========================================================
    // Tab Navigation & Setup
    // ========================================================
    function switchTab(tabId) {
      currentActiveTab = tabId;

      document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabId) {
          btn.classList.remove('text-brand-100', 'hover:bg-brand-700/60');
          btn.classList.add('bg-brand-600', 'text-white', 'shadow-sm');
        } else {
          btn.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
          btn.classList.add('text-brand-100', 'hover:bg-brand-700/60');
        }
      });

      ['entry', 'compare', 'makeup', 'special', 'stats', 'print', 'settings'].forEach(id => {
        const sec = document.getElementById(`tab-${id}`);
        if (sec) {
          if (id === tabId) sec.classList.remove('hidden');
          else sec.classList.add('hidden');
        }
      });

      if (tabId === 'entry') renderGradeTable();
      else if (tabId === 'makeup') renderMakeupTab();
      else if (tabId === 'compare') renderComparisonTab();
      else if (tabId === 'special') renderSpecialHub();
      else if (tabId === 'stats') renderStatsView();
      else if (tabId === 'print') renderPrintPreview();
    }

    function setupEventListeners() {
      // Tab navigation
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
      });

      // Exam Switchers in Workbench
      document.getElementById('btnSwitchExam1').addEventListener('click', () => {
        currentExamStage = '1';
        renderGradeTable();
      });
      document.getElementById('btnSwitchExam2').addEventListener('click', () => {
        currentExamStage = '2';
        renderGradeTable();
      });

      // Makeup Exam stage & 5-subject switches
      document.getElementById('btnMakeupSwitchExam1').addEventListener('click', () => {
        currentMakeupExamStage = '1';
        renderMakeupTab();
      });
      document.getElementById('btnMakeupSwitchExam2').addEventListener('click', () => {
        currentMakeupExamStage = '2';
        renderMakeupTab();
      });
      document.querySelectorAll('.mk-sub-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentMakeupSubjectFilter = btn.dataset.mkSub;
          renderMakeupTab();
        });
      });
      document.getElementById('btnPrintMakeupSubjSheet').addEventListener('click', () => {
        switchTab('print');
        document.getElementById('printFormatSelect').value = 'makeup-exam-roster-subj';
        renderPrintPreview();
      });
      document.getElementById('btnPrintMakeupNotice').addEventListener('click', () => {
        switchTab('print');
        document.getElementById('printFormatSelect').value = 'makeup-exam-roster';
        renderPrintPreview();
      });

      // Filter Buttons in Workbench
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-slate-800', 'text-white');
            b.classList.add('bg-slate-100', 'text-slate-700');
          });
          btn.classList.remove('bg-slate-100', 'text-slate-700');
          btn.classList.add('bg-slate-800', 'text-white');
          currentFilter = btn.dataset.filter;
          renderGradeTable();
        });
      });

      // Live search
      document.getElementById('searchStudentInput').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderGradeTable();
      });

      // Top Actions
      document.getElementById('btnManualSave').addEventListener('click', () => saveData(true));
      document.getElementById('btnDownloadSourceHtml').addEventListener('click', downloadSourceHtml);
      document.getElementById('btnTopPrint').addEventListener('click', () => switchTab('print'));
      document.getElementById('btnKeyboardTip').addEventListener('click', () => {
        showToast('鍵盤操作提示：輸入成績後按 Enter 或 ↓ 快速切換至下一位學生同科目；Tab 鍵跳至次一科目。', 'info');
      });

      // Comparison Sub-views navigation
      const fullBtn = document.getElementById('btnSubCompareFull');
      const progRankBtn = document.getElementById('btnSubCompareProgressRank');
      const subjRankBtn = document.getElementById('btnSubCompareSubjectRank');
      const subjSelectWrapper = document.getElementById('subjectProgressSelectorWrapper');

      const vFull = document.getElementById('viewCompareFull');
      const vProg = document.getElementById('viewCompareProgressRank');
      const vSubj = document.getElementById('viewCompareSubjectRank');

      function resetSubCompareBtns() {
        [fullBtn, progRankBtn, subjRankBtn].forEach(b => {
          b.className = 'sub-compare-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition';
        });
        [vFull, vProg, vSubj].forEach(v => v.classList.add('hidden'));
        subjSelectWrapper.classList.add('hidden');
      }

      fullBtn.addEventListener('click', () => {
        resetSubCompareBtns();
        fullBtn.className = 'sub-compare-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white transition';
        vFull.classList.remove('hidden');
        renderCompareFullTable();
      });

      progRankBtn.addEventListener('click', () => {
        resetSubCompareBtns();
        progRankBtn.className = 'sub-compare-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white transition';
        vProg.classList.remove('hidden');
        renderProgressRankTable();
      });

      subjRankBtn.addEventListener('click', () => {
        resetSubCompareBtns();
        subjRankBtn.className = 'sub-compare-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white transition';
        vSubj.classList.remove('hidden');
        subjSelectWrapper.classList.remove('hidden');
        renderSubjectProgressTable();
      });

      document.getElementById('selectCompareSubject').addEventListener('change', renderSubjectProgressTable);

      // Modals
      document.getElementById('btnOpenAddStudentModal').addEventListener('click', openAddStudentModal);
      document.getElementById('btnCloseStudentModal').addEventListener('click', closeAddStudentModal);
      document.getElementById('btnCancelStudentModal').addEventListener('click', closeAddStudentModal);
      document.getElementById('btnConfirmAddStudent').addEventListener('click', confirmAddStudent);

      document.getElementById('btnCloseSpecialModal').addEventListener('click', closeSpecialModal);
      document.getElementById('btnCancelSpecialModal').addEventListener('click', closeSpecialModal);
      document.getElementById('btnSaveSpecialModal').addEventListener('click', saveSpecialModalData);

      document.getElementById('btnCloseGrowthModal').addEventListener('click', closeStudentGrowthModal);
      document.getElementById('btnDismissGrowthModal').addEventListener('click', closeStudentGrowthModal);

      // AI Generation Buttons Listeners
      document.getElementById('btnBatchAIGenerateExamNotes').addEventListener('click', batchGenerateAllExamAINotes);
      document.getElementById('btnBatchAIGenerateDualAnalysis').addEventListener('click', batchGenerateAllDualAINotes);

      document.getElementById('btnModalAIGen1').addEventListener('click', () => {
        if (!editingStudentId) return;
        const s = appData.students.find(x => x.id === editingStudentId);
        if (s) {
          document.getElementById('modalNotes1').value = buildSingleExamAIComment(s, '1');
          showToast('✨ 已生成第一次段考評語預覽，按「儲存特教設定」即可生效！', 'info');
        }
      });
      document.getElementById('btnModalAIGen2').addEventListener('click', () => {
        if (!editingStudentId) return;
        const s = appData.students.find(x => x.id === editingStudentId);
        if (s) {
          document.getElementById('modalNotes2').value = buildSingleExamAIComment(s, '2');
          showToast('✨ 已生成第二次段考評語預覽，按「儲存特教設定」即可生效！', 'info');
        }
      });
      document.getElementById('btnModalAIGenDual').addEventListener('click', () => {
        if (!editingStudentId) return;
        const s = appData.students.find(x => x.id === editingStudentId);
        if (s) {
          document.getElementById('modalSpecialNotes').value = buildDualComparisonAIComment(s);
          showToast('✨ 已生成兩次段考比較分析預覽，按「儲存特教設定」即可生效！', 'info');
        }
      });

      document.getElementById('btnGrowthModalRegenAI').addEventListener('click', () => {
        if (!currentGrowthModalStudentId) return;
        const s = appData.students.find(x => x.id === currentGrowthModalStudentId);
        if (s) {
          s.notes1 = buildSingleExamAIComment(s, '1');
          s.notes2 = buildSingleExamAIComment(s, '2');
          s.specialNotes = buildDualComparisonAIComment(s);
          saveData(false);
          openStudentGrowthModal(currentGrowthModalStudentId);
          renderGradeTable();
          renderComparisonTab();
          renderPrintPreview();
          showToast(`✨ 已為「${s.name}」一鍵更新一段評語、二段評語與綜合比較分析！`, 'success');
        }
      });

      // Print Actions
      document.getElementById('printFormatSelect').addEventListener('change', renderPrintPreview);
      document.getElementById('chkPrintHideSpecial').addEventListener('change', renderPrintPreview);
      document.getElementById('btnExecutePrint').addEventListener('click', () => {
        renderPrintPreview();
        window.print();
      });
      document.getElementById('btnPrintSpecialReport').addEventListener('click', () => {
        switchTab('print');
        document.getElementById('printFormatSelect').value = 'special-roster';
        renderPrintPreview();
      });

      // Settings Save
      document.getElementById('btnSaveSchoolMeta').addEventListener('click', () => {
        appData.schoolName = document.getElementById('settingSchoolName').value.trim() || '國民中學';
        appData.className = document.getElementById('settingClassName').value.trim() || '七年甲班';
        appData.teacherName = document.getElementById('settingTeacher').value.trim() || '導師';
        appData.academicYear = document.getElementById('settingAcademicYear').value.trim() || '115學年度';
        saveData(false);
        updateSchoolHeader();
        computeDualExamRankings();
        renderGradeTable();
        showToast('學校與班級設定已更新！', 'success');
      });

      // File backups
      document.getElementById('btnDownloadSampleCSV').addEventListener('click', downloadSampleCSV);
      document.getElementById('btnDownloadSampleTXT').addEventListener('click', downloadSampleTXT);
      document.getElementById('inputImportClassFile').addEventListener('change', handleImportClassFile);
      document.getElementById('btnExportJSON').addEventListener('click', exportJSONBackup);
      document.getElementById('inputImportJSON').addEventListener('change', handleImportJSON);
      document.getElementById('btnExportCSVDualCompare').addEventListener('click', exportDualCompareCSV);
      document.getElementById('btnExportCSVMakeup').addEventListener('click', exportMakeupCSV);
      document.getElementById('btnExportCSVSpecial').addEventListener('click', exportSpecialCSV);

      // Reset Demo Data
      document.getElementById('btnReloadDemoData').addEventListener('click', () => {
        showConfirmModal(
          '重設示範資料',
          '這將會恢復包含七年甲班 15 位學生、完整兩次段考分數、豐富成長消長與特殊生設定之示範資料庫。確定繼續？',
          () => {
            appData = JSON.parse(JSON.stringify(defaultData));
            saveData(false);
            initApp();
            showToast('已成功還原完整小校雙次段考示範資料！', 'success');
          }
        );
      });

      // Clear Data
      document.getElementById('btnClearAllData').addEventListener('click', () => {
        showConfirmModal(
          '清空所有學生資料',
          '確定要清空學生名冊與兩次段考成績嗎？',
          () => {
            appData.students = [];
            saveData(false);
            initApp();
            showToast('全班名冊已清空，可開始全新登打或匯入！', 'info');
          }
        );
      });
    }

    function initApp() {
      loadData();
      updateSchoolHeader();
      computeDualExamRankings();
      renderGradeTable();
      renderComparisonTab();
      renderMakeupTab();
      renderSpecialHub();
      renderPrintPreview();
    }

    window.addEventListener('DOMContentLoaded', () => {
      initApp();
      setupEventListeners();
    });
