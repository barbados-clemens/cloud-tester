import { createConformanceRule, ConformanceViolation } from '@nx/conformance';

export default createConformanceRule({
  name: 'workspace-rule',
  category: 'consistency',
  description: 'workspace level rule check',
  implementation: async (context) => {
    const violations: ConformanceViolation[] = [];
    violations.push({
      workspaceViolation: true,
      message: 'workspace-rule',
    });

    return {
      severity: 'low',
      details: {
        violations,
      },
    };
  },
});
