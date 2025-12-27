document.addEventListener('DOMContentLoaded', () => {
    const chipContainers = document.querySelectorAll('.chip-container');
    const mainCard = document.getElementById('main-card');
    const statusText = document.getElementById('status-text');
    const btnSubmit = document.getElementById('btn-submit');
    const btnCopy = document.getElementById('btn-copy');
    const btnReset = document.getElementById('btn-reset');

    // State management
    const selection = {
        spray: null,
        dosage: null
    };

    // Handle Chip and Custom Selection
    chipContainers.forEach(container => {
        const field = container.dataset.field;
        const chips = container.querySelectorAll('.chip:not(.custom-trigger)');
        const customTrigger = container.querySelector('.custom-trigger');
        const customWrapper = container.querySelector('.custom-input-wrapper');
        const stepValueDisplay = container.querySelector('.step-value');
        const btnMinus = container.querySelector('.minus');
        const btnPlus = container.querySelector('.plus');
        const btnConfirm = container.querySelector('.btn-confirm-custom');

        // Regular Chip Click
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                if (selection[field] === chip.dataset.value) return;

                resetGroupCustom(container);
                setActiveChip(chips, chip, field);
                updateUI();
                vibrate();
            });
        });

        // Custom Trigger Click
        customTrigger.addEventListener('click', () => {
            customTrigger.classList.add('hidden');
            customWrapper.classList.remove('hidden');

            // Clear previous selection in this group
            chips.forEach(c => c.classList.remove('active'));
            selection[field] = null;
            updateUI();
        });

        // Stepper Logic
        btnPlus.addEventListener('click', () => {
            let val = parseInt(stepValueDisplay.textContent);
            val++;
            stepValueDisplay.textContent = val;
            vibrate(2);
        });

        btnMinus.addEventListener('click', () => {
            let val = parseInt(stepValueDisplay.textContent);
            if (val > 1) {
                val--;
                stepValueDisplay.textContent = val;
                vibrate(2);
            }
        });

        // Confirm Custom Value
        btnConfirm.addEventListener('click', () => {
            selection[field] = stepValueDisplay.textContent;
            customWrapper.classList.add('active-glow');
            updateUI();
            vibrate();
        });
    });

    function setActiveChip(chips, activeChip, field) {
        chips.forEach(c => c.classList.remove('active'));
        activeChip.classList.add('active');
        selection[field] = activeChip.dataset.value;
    }

    function resetGroupCustom(container) {
        const customTrigger = container.querySelector('.custom-trigger');
        const customWrapper = container.querySelector('.custom-input-wrapper');
        const stepValueDisplay = container.querySelector('.step-value');

        customTrigger.classList.remove('hidden');
        customWrapper.classList.add('hidden');
        customWrapper.classList.remove('active-glow');

        // Reset to initial defaults
        if (container.dataset.field === 'spray') {
            stepValueDisplay.textContent = '5';
        } else {
            stepValueDisplay.textContent = '8';
        }
    }

    function updateUI() {
        const isSpraySet = selection.spray !== null;
        const isDosageSet = selection.dosage !== null;

        if (isSpraySet && isDosageSet) {
            mainCard.classList.add('complete');
            statusText.textContent = `Pronto! ${selection.spray} frascos, ${selection.dosage} borrifadas.`;
            btnSubmit.classList.remove('disabled');
            btnSubmit.disabled = false;
        } else if (isSpraySet || isDosageSet) {
            mainCard.classList.remove('complete');
            statusText.textContent = 'Quase lá... complete os campos.';
            btnSubmit.classList.add('disabled');
            btnSubmit.disabled = true;
        } else {
            mainCard.classList.remove('complete');
            statusText.textContent = 'Aguardando preenchimento...';
            btnSubmit.classList.add('disabled');
            btnSubmit.disabled = true;
        }
    }

    // Logic for "Copy Last" (Simulation)
    btnCopy.addEventListener('click', () => {
        const commonSpray = document.querySelector('[data-field="spray"] .chip.common');
        const commonDosage = document.querySelector('[data-field="dosage"] .chip.common');

        if (commonSpray) {
            resetGroupCustom(document.querySelector('[data-field="spray"]'));
            commonSpray.click();
        }
        if (commonDosage) {
            resetGroupCustom(document.querySelector('[data-field="dosage"]'));
            commonDosage.click();
        }

        statusText.textContent = 'Valores padrão restaurados!';
    });

    btnReset.addEventListener('click', () => {
        if (confirm('Deseja limpar todos os campos?')) {
            resetAll();
            statusText.textContent = 'Campos limpos.';
        }
    });

    // Final Action
    btnSubmit.addEventListener('click', () => {
        if (btnSubmit.disabled) return;

        btnSubmit.textContent = 'Enviando...';
        btnSubmit.classList.add('disabled');

        setTimeout(() => {
            alert(`Prescrição Enviada!\nFrascos: ${selection.spray}\nDosagem: ${selection.dosage}`);
            resetAll();
        }, 1000);
    });

    function resetAll() {
        chipContainers.forEach(container => resetGroupCustom(container));
        selection.spray = null;
        selection.dosage = null;
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btnSubmit.textContent = 'Gerar Prescrição';
        updateUI();
    }

    // Micro-interaction: Subtle vibration simulation
    function vibrate(intensity = 1) {
        const move = intensity * 2;
        mainCard.style.transform = `translateY(-${move}px)`;
        setTimeout(() => {
            mainCard.style.transform = 'translateY(0)';
        }, 100);
    }
});
