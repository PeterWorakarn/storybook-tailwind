/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Drawer } from "../Drawer/Drawer";
import { PlacementType, VariantType } from "../../../constant-enum-types";
import { Button } from "../Button/Button";


export default {
  title: "Component/Drawer",
  component: Drawer,
  argTypes: {
    position: {
      name: 'Position',
      defaultValue: PlacementType.BOTTOM,
      options: [PlacementType.BOTTOM, PlacementType.LEFT, PlacementType.RIGHT],
      control: { type: 'select' }
    },
    header: {
      name: 'Header',
      defaultValue: 'This is Header',
      control: { type: 'text' }
    },
    isCloseButton: {
      name: 'Close Btn',
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
};

export const CustomDrawer = (args: any) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Button
        label="Drawer"
        variant={VariantType.SECONDARY}
        onClick={() => setDrawer(true)}
      />
      <Drawer {...args} visible={drawer} onClose={() => setDrawer(false)} />
    </>
  )
}