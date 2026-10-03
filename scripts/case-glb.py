#!/usr/bin/env python3
"""Convert the POT assembly STL (mm, Z-up) into a viewer-ready case.glb.

Normalizes to: Y-up, base at y=0, XZ centered, max dimension 2.4 units
(matching the CaseCanvas camera rig). Run with the venv that has trimesh:
    /tmp/opencode/venv/bin/python scripts/case-glb.py
"""
import trimesh
import numpy as np

SRC = 'assets-raw/raw-models/POT/POT (Assembly).stl'
DST = 'public/models/case.glb'
TARGET = 2.4

mesh = trimesh.load(SRC, force='mesh')
print('in faces:', len(mesh.faces), 'bounds:', mesh.bounds.tolist())

# Z-up (CAD) -> Y-up (three.js): rotate -90 deg about X
rot = trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0])
mesh.apply_transform(rot)

# Center XZ, rest base on y=0
min_b, max_b = mesh.bounds
mesh.vertices[:, [0, 2]] -= [(min_b[0] + max_b[0]) / 2, (min_b[2] + max_b[2]) / 2]
mesh.vertices[:, 1] -= mesh.bounds[0, 1]

# Uniform scale to target height
span = mesh.bounds[1] - mesh.bounds[0]
mesh.vertices *= TARGET / span.max()
print('out bounds:', mesh.bounds.tolist())

mesh.export(DST)
print('wrote', DST)
