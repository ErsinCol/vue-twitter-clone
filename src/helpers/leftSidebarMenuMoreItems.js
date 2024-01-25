import {defineAsyncComponent} from "vue";

export const leftSidebarMenuMoreItems = [
    {
        label: 'Creator Studio',
        panel: [
            {
                path: '/',
                icon: defineAsyncComponent(() => import("@/assets/icons/analytics.svg")),
                label: 'Analytics'
            }
        ],
    },
    {
        label: 'Professional Tools',
        panel: [
            {
                path: '/',
                icon: defineAsyncComponent(() => import("@/assets/icons/ads.svg")),
                label: 'Ads'
            }
        ]
    },
    {
        label: 'Settings and Support',
        panel: [
            {
                path: '/',
                icon: defineAsyncComponent(() => import("@/assets/icons/settings_privacy.svg")),
                label: 'Settings and privacy'
            },
            {
                path: '/',
                icon: defineAsyncComponent(() => import("@/assets/icons/help_center.svg")),
                label: 'Help center'
            },
            {
                icon: defineAsyncComponent(()=> import("@/assets/icons/display.svg")),
                label: 'Display'
            },
            {
                path: '/',
                icon: defineAsyncComponent(() => import("@/assets/icons/keyboard_shortcuts.svg")),
                label: 'Keyboard shortcuts'
            },
        ]
    }
]