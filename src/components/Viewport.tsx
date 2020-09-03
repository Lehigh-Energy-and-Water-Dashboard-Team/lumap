import * as React from 'react';
import {Id64String} from '@bentley/bentleyjs-core';
import {IModelConnection} from '@bentley/imodeljs-frontend';
import {ViewportComponent} from '@bentley/ui-components';
import {viewWithUnifiedSelection} from '@bentley/presentation-components';
import Toolbar from './Toolbar';

// create a HOC viewport component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleViewport = viewWithUnifiedSelection(ViewportComponent);

/** React properties for the viewport component */
interface IProps {
  /** iModel whose contents should be displayed in the viewport */
  imodel: IModelConnection;
  /** View definition to use when the viewport is first loaded */
  viewDefinitionId: Id64String;
}

/** Viewport component for the viewer app */
export class SimpleViewportComponent extends React.Component<IProps> {
  public render() {
    return (
      <>
        <SimpleViewport style={{height: '100vh'}} imodel={this.props.imodel} viewDefinitionId={this.props.viewDefinitionId} />
        <Toolbar />
      </>
    );
  }
}
