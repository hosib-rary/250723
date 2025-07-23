document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[aria-controls]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
        const targetId = button.getAttribute('aria-controls');
        const target = document.getElementById(targetId);

        // 모든 버튼의 aria-expanded 초기화 + 모든 영역 hidden 처리
        buttons.forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            const controlledId = btn.getAttribute('aria-controls');
            const controlledEl = document.getElementById(controlledId);
            if (controlledEl) controlledEl.hidden = true;
        });

        // 현재 클릭된 버튼만 true로 설정하고, 해당 영역만 보여줌
        button.setAttribute('aria-expanded', 'true');
        if (target) target.hidden = false;
        });
    });
});