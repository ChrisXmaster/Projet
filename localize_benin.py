import os
import pathlib

mappings = {
    '1 100â‚¬': '150 000 FCFA',
    'â‚¬': 'FCFA',
    'âFCFA¢': '•',
    'âFCFA”:': '—',
    'âFCFA”': '—',
    'âFCFA¢âFCFA¢âFCFA¢âFCFA¢âFCFA¢âFCFA¢âFCFA¢âFCFA¢': '••••••••',
    'Ã ': 'à',
    'Paris-Saclay': 'Cotonou-Saclay',
    '75009 Cotonou': 'Cotonou',
    'Paris 9e': 'Cotonou',
    'Paris 8e': 'Cotonou',
    'Cotonou Cotonou': 'Cotonou',
    'Cotonou 9e': 'Cotonou',
    'Cotonou 8e': 'Cotonou',
    'techparis.fr': 'benintech.bj',
    'TechCotonou': 'BéninTech',
    'ðŸ‘‹': '👋',
    'ðŸ ¢': '🏢',
    'ðŸ’»': '💻',
    'âœ…': '✅',
    'â ³': '⏳',
    'â Œ': '❌'
}

root = 'c:/Projets_persos/Projet/pages'
for path in pathlib.Path(root).rglob('*.html'):
    try:
        content = path.read_text(encoding='utf-8')
        modified = False
        for k, v in mappings.items():
            if k in content:
                content = content.replace(k, v)
                modified = True
        if modified:
            path.write_text(content, encoding='utf-8')
            print(f'Updated: {path}')
    except Exception as e:
        print(f'Error processing {path}: {e}')
