export function scrollToSection(sectionId, options = {}) {
    const { navigate } = options;
    const target = document.getElementById(sectionId);

    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
    }

    if (navigate) {
        window.sessionStorage.setItem('pendingSection', sectionId);
        navigate('/');
    }

    return false;
}
