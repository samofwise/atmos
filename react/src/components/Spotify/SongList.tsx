import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, Collapse, ListItem, ListItemButton, IconButton } from '@mui/material';
import { useState, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import uniqid from 'uniqid';
import SpotifyListDetail from './SpotifyListDetail';
import { SongListType } from './types';

interface SongListProps {
  items: SongListType[],
  children?: (item: SongListType) => JSX.Element,
  getSubItems: (item: SongListType) => SongListType[]
}

function SongList({ items, children, getSubItems }: SongListProps) {
  const [openItems, setOpenItems] = useState([] as SongListType[]);
  const toggleShow = useCallback((item: SongListType) => {
    setOpenItems((o) => (!o.find((i) => i.id === item.id)
      ? [...o, item] : o.filter((i) => i.id !== item.id)
    ));
  }, [setOpenItems]);
  const getIsOpen = useCallback(
    (item: SongListType) => !!openItems.find((i) => i.id === item.id),
    [openItems],
  );

  return (
    <List sx={{ width: '100%' }} disablePadding>
      {items.map((item) => {
        const subItems = getSubItems(item);
        const isOpen = subItems.length !== 0 ? getIsOpen(item) : undefined;
        return (
          <>
            <SongListItem item={item} isOpen={isOpen} toggleShow={toggleShow}>
              {children}
            </SongListItem>
            {subItems.length !== 0 && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List disablePadding sx={{ pl: 2 }}>
                {subItems.map((i) => (
                  <SongListItem item={i}>
                    {children}
                  </SongListItem>
                ))}
              </List>
            </Collapse>
            )}
          </>
        );
      })}
    </List>
  );
}

export default SongList;

interface SongListItemProps {
  item: SongListType,
  children?: (item: SongListType) => JSX.Element | undefined,
  isOpen?: boolean,
  toggleShow?: (item: SongListType) => void
}

function SongListItem({ item, children, isOpen, toggleShow }:SongListItemProps) {
  return (
    <ListItem key={uniqid()} disablePadding>
      <ListItemButton role={undefined} dense>
        {children && children(item)}
        <SpotifyListDetail item={item} />
        {isOpen !== undefined && (
          <IconButton onClick={() => toggleShow && toggleShow(item)}>
            {!isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </ListItemButton>
    </ListItem>
  );
}
