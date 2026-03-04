namespace shop {

    export class ShopUI {

        state: UIState = UIState.SlotNavigation

        shop: Shop
        slots: ShopSlot[]
        slotSprites: Sprite[] = []
        cursor: Sprite

        selectedRow = 0
        selectedCol = 0

        // Item-Scroll-Zustand
        activeItems: ItemDefinition[]
        activeItemIndex = 0

        enabled: boolean = false

        constructor(slots: ShopSlot[]) {

            this.slots = slots

            this.createVisuals()
            this.createCursor()
            this.updateCursor()
        }

        // --------------------------------------------------
        // VISUALS
        // --------------------------------------------------

        private createVisuals() {

            for (let s of this.slots) {

                let box = sprites.create(img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 . . . . . . . . . . . . . . . . . . 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                `, SpriteKind.UI)

                box.setFlag(SpriteFlag.RelativeToCamera, true)

                box.left = 10 + s.col * 30
                box.top = 40 + s.row * 30

                this.slotSprites.push(box)
            }
        }

        private createCursor() {

            this.cursor = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . . . . . 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, SpriteKind.UI)

            this.cursor.setFlag(SpriteFlag.RelativeToCamera, true)
        }

        // --------------------------------------------------
        // SLOT SELECTION
        // --------------------------------------------------

        select() {

            let slot = this.getCurrentSlot()
            if (!slot) return

            if (this.state == UIState.SlotNavigation) {

                this.activeItems =
                    this.shop.inv.getItemsForSlot(slot.type)

                if (this.activeItems.length == 0) return

                this.state = UIState.ItemSelection
                this.activeItemIndex = 0

                slot.equip(this.activeItems[0])
            }
            else {
                // Zurück in SlotNavigation
                this.state = UIState.SlotNavigation
            }
        }

        move(dx: number, dy: number) {

            if (this.state == UIState.SlotNavigation) {
                this.moveSlots(dx, dy)
                return
            }

            // ITEM-SCROLL-MODUS
            if (this.state == UIState.ItemSelection) {

                if (dx == 0) return

                this.activeItemIndex += dx

                if (this.activeItemIndex < 0)
                    this.activeItemIndex = this.activeItems.length - 1

                if (this.activeItemIndex >= this.activeItems.length)
                    this.activeItemIndex = 0

                let slot = this.getCurrentSlot()
                slot.equip(this.activeItems[this.activeItemIndex])
            }
        }

        private moveSlots(dx: number, dy: number) {

            let targetRow = this.selectedRow + dy
            let targetCol = this.selectedCol + dx

            for (let s of this.slots) {
                if (s.row == targetRow && s.col == targetCol) {
                    this.selectedRow = targetRow
                    this.selectedCol = targetCol
                    break
                }
            }

            this.updateCursor()
        }

        private updateCursor() {

            for (let i = 0; i < this.slots.length; i++) {

                let s = this.slots[i]

                if (s.row == this.selectedRow &&
                    s.col == this.selectedCol) {

                    this.cursor.left = this.slotSprites[i].left
                    this.cursor.top = this.slotSprites[i].top
                }
            }
        }

        private getCurrentSlot(): ShopSlot {

            for (let s of this.slots) {
                if (s.row == this.selectedRow &&
                    s.col == this.selectedCol) {
                    return s
                }
            }

            return null
        }
    }
}