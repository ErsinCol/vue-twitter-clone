import AnalyticsIcon from "@/assets/icons/analytics.svg"
import AdsIcon from "@/assets/icons/ads.svg"
import SettingsAndPrivacyIcon from "@/assets/icons/settings_privacy.svg"
import HelpCenterIcon from "@/assets/icons/help_center.svg"
import DisplayIcon from "@/assets/icons/display.svg"
import KeyboardShortcutsIcon from "@/assets/icons/keyboard_shortcuts.svg"
export const leftSidebarMenuMoreItems = [
    {
        label: 'Creator Studio',
        panel: [
            {
                path: '/',
                icon: AnalyticsIcon,
                label: 'Analytics'
            }
        ],
    },
    {
        label: 'Professional Tools',
        panel: [
            {
                path: '/',
                icon: AdsIcon,
                label: 'Ads'
            }
        ]
    },
    {
        label: 'Settings and Support',
        panel: [
            {
                path: '/',
                icon: SettingsAndPrivacyIcon,
                label: 'Settings and privacy'
            },
            {
                path: '/',
                icon: HelpCenterIcon,
                label: 'Help center'
            },
            {
                icon: DisplayIcon,
                label: 'Display'
            },
            {
                path: '/',
                icon: KeyboardShortcutsIcon,
                label: 'Keyboard shortcuts'
            },
        ]
    }
]