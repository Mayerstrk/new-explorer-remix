import clsx from 'clsx'
import { NavItems } from './nav-bar'
import { usePopup, PopupName } from '~/hooks/usePopup'

export function NavMobileMenu() {
  const { isOpen } = usePopup(PopupName.navMenu)
  return (
    <div
      className={clsx(
        'absolute top-0 w-full bg-[#1A1B22] pt-[var(--navbar-h)] text-white md:hidden',
        {
          'flex-col': isOpen,
          hidden: !isOpen,
        },
      )}
    >
      <NavItems />
    </div>
  )
}
